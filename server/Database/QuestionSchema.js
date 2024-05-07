const mongoose = require("mongoose")

const question_schema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    questionType: {
        type: String,
        required: true
    },
    answerSelectionType: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number, // Assuming correctAnswer will be an index of the answers array
        required: true
    },
    messageForCorrectAnswer: {
        type: String,
        required: true
    },
    messageForIncorrectAnswer: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: true
    },
    subject:String
});

const Questions = mongoose.model("Question", question_schema)
module.exports = { Questions }