const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bcrypt = require("bcrypt");
const session = require('express-session');
const { connectToDb } = require('./controllers/Connection_to_DB');
const { loadBulkData } = require('./controllers/LoadBulkData');
const { getQuiz } = require('./controllers/getQuiz');
//Initialization
const app = express();
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 3,
        httpOnly: true,
        secure: false,
    },
}))
//Controllers
const database_Connection = connectToDb
//connection to database server
database_Connection();
//Adding new Questions in bulk
app.get('/loadNewData/:subject', loadBulkData)

//Routes
app.get('/', async function (req, res) {
    res.json({ message: 'Hello World' });
})
app.post('/getQuiz/',getQuiz)
app.listen(3000, function (err) {
    console.log('listening on port 3000');
})