const mongoose = require('mongoose');
const results_schema = new mongoose.Schema({
    fullResult: Object,
    marks: Number,
    userID: { type: String, require: true },
    totallQuestions: Number,
    timeTaken: String,
    questionAttempted: Number,
    totalPoints: Number,
    correctPoints: Number,
    userName: String
}, { timestamps: true })

const RESULT = mongoose.model('Result', results_schema)

module.exports = { RESULT }