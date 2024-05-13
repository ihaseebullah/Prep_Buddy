const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const { connectToDb } = require("./controllers/Connection_to_DB");
const { loadBulkData } = require("./controllers/LoadBulkData");
const { getQuiz } = require("./controllers/getQuiz");
const { GoogleGenerativeAI } = require("@google/generative-ai");
//Initialization
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 3,
      httpOnly: true,
      secure: false,
    },
  })
);
//Controllers
const database_Connection = connectToDb;
//connection to database server
database_Connection();
//Adding new Questions in bulk
app.get("/loadNewData/:subject", loadBulkData);

//Routes
app.get("/", async function (req, res) {
  res.json({ message: "Hello World" });
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
    console.log("prompt : ", prompt);
    console.log("history : ", history);
    const result = await generate(prompt, history);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/getQuiz/:subject/:noOfMcqs", getQuiz);
app.listen(3000, function (err) {
  console.log("listening on port 3000");
});
