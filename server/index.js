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
  if (!req.session.user) {
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
}
//Adding new Questions in bulk
app.get("/loadNewData/:subject", loadBulkData);

//Routes
app.get("/", loginUser, (req, res) => {
  res.status(200).json({ user: req.session.USER });
});

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

app.post("/getQuiz/", getQuiz);
// app.post('/quiz/results',async function(req,res)=>{

// })

app.post("/api/signup/", Signup);
app.post("/api/auth/login", Login);
app.listen(3000, function (err) {
  console.log("listening on port 3000");
});
