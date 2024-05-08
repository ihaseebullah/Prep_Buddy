const mongoose = require("mongoose")

const english_question_schema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true,
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
        type: String, // Assuming correctAnswer will be an index of the answers array
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
        type: String,

        required: true
    },
});

const English_Questions = mongoose.model("English_Questions", english_question_schema)
const biology_question_schema = new mongoose.Schema({
    question: {
        type: String,
        unique: true,
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
        type: String, // Assuming correctAnswer will be an index of the answers array
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
        type: String,

        required: true
    },
});

const Biology_Questions = mongoose.model("Biology_Questions", biology_question_schema)
const physics_question_schema = new mongoose.Schema({
    question: {
        type: String,
        unique: true,
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
        type: String, // Assuming correctAnswer will be an index of the answers array
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
        type: String,

        required: true
    },
});

const Physics_Questions = mongoose.model("Physics_Questions", physics_question_schema)
const chemistry_question_schema = new mongoose.Schema({
    question: {
        type: String,
        unique: true,
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
        type: String, // Assuming correctAnswer will be an index of the answers array
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
        type: String,
        required: true
    },
});

const Chemistry_Questions = mongoose.model("Chemistry_Questions", chemistry_question_schema)
module.exports = { English_Questions, Biology_Questions, Physics_Questions, Chemistry_Questions }