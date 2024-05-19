const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const { connectToDb } = require("./controllers/Connection_to_DB");
const { loadBulkData } = require("./controllers/LoadBulkData");
const { getQuiz } = require("./controllers/getQuiz");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Signup } = require("./controllers/Signup");
const { Login } = require("./controllers/Login");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { RESULT } = require("./Database/Results");
const { USER } = require("./Database/User");
const { SAVED } = require("./Database/Saved");
//Initialization
const app = express();
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    maxAge: 2 * 60 * 1000,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

//Controllers
const database_Connection = connectToDb;
//connection to database server
database_Connection();
function loginUser(req, res, next) {
  if (!req.session.USER) {
    const token = req.cookies?.jwt;
    if (token) {
      try {
        jwt.verify(token, process.env.SESSION_SECRET, {}, (err, user) => {
          if (err) throw err;
          req.session.USER = user.user;
        });
        next();
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
      return;
    } else {
      res.status(403).json({ message: "Please Login First" });
    }
  }
  next();
}
//Adding new Questions in bulk
app.get("/loadNewData/:subject", loadBulkData);

//Routes
app.get("/", loginUser, async (req, res) => {
  res.status(200).json({ user: await USER.findById(req.session.USER._id) });
});

//Generate new Quiz
app.post("/getQuiz/", getQuiz);
//Analytics
app.get('/analytics', async function (req, res) {
  const userId = req.session.USER._id;
  try {
    // const results = await RESULT.find({ userID: userId }).sort({ _id: -1 }).limit(10);
    const user = await USER.findById(userId).populate('results').exec()
    const leaderBoard = await USER.find({}, { fullName: 1, points: 1, _id: 1 }).limit(10).sort({ points: -1 })
    const saved = await USER.findById(userId).populate('saved').exec()
    console.log(saved)
    res.status(200).json({ Analytics: { prevTestScores: user.results, leaderBoard: leaderBoard, saved: saved.saved } });
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
//Save quiz results
app.post('/quiz/results', async function (req, res) {
  console.log(req.session.USER)
  const userId = req.session.USER._id;
  const username = req.session.USER.username;
  try {
    const { totalPoints, correctPoints, userInput } = req.body;
    const newResult = RESULT({
      totalPoints: parseInt(totalPoints),
      correctPoints: parseInt(correctPoints),
      questionAttempted: userInput ? userInput.length : 0,
      userID: userId,
      userName: username
    })

    await newResult.save().then(async (result) => {
      const currentUser = await USER.findById(userId);
      await USER.findByIdAndUpdate(userId, {
        points: currentUser.points + parseInt(correctPoints),
        results: currentUser.results ? [...currentUser.results, result._id] : [result._id]
      });
      loginUser();
      res.status(200).json({ success: true, message: "Results saved successfully" })
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Save Quiz Results to favouirte 
app.post('/quiz/results/saveFavourite', loginUser, async (req, res) => {
  const { quizTitleToSave, description, priority, quiz } = req.body
  const newSave = SAVED({
    quizTitle: quizTitleToSave,
    userId: req.session.USER._id,
    description: description,
    priority: priority,
    quiz: quiz
  })
  await newSave.save().then(async (saved) => {
    const user = await USER.findById(req.session.USER._id)
    await USER.findByIdAndUpdate(req.session.USER._id, { saved: [...user.saved, saved._id] })
    res.status(200).json({ message: req.session.USER.fullName + " Your quiz has been saved" })
  })
})
app.get('/test', async (req, res) => {
  const result = await USER.find({})
  // await USER.findByIdAndDelete("6644ef1694724918bcaca08d")
  // const result=await RESULT.findById("6645f450ef1e9041ae041d4a")
  res.status(200).json(result)
})
// ai integration

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const generate = async (userPrompt, chatHistory) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: chatHistory,
    });

    const msg = `${userPrompt}`;

    const result = await chat.sendMessage(msg);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    res.status("500").json("Error generating content:", error.message);
    return null;
  }
};
app.post("/ai", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const history = req.body.history;
    const result = await generate(prompt, history);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post("/api/signup/", Signup);
app.post("/api/auth/login", Login);
app.listen(3000, function (err) {
  console.log("listening on port 3000");
});
