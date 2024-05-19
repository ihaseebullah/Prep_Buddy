const mongoose = require('mongoose');

const saved = new mongoose.Schema({
    quizTitle: String,
    userId: String,
    description: String,
    priority: Boolean,
    quiz: Object
})

const SAVED = mongoose.model('Saved', saved)

module.exports = { SAVED }