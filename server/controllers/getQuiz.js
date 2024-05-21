const mongoose = require("mongoose")
const { English_Questions, Physics_Questions, Chemistry_Questions, Biology_Questions } = require("../Database/QuestionSchema")
async function getQuiz(req, res) {
    const { subject } = req.body;
    try {
        if (subject === "English") {
            const randomQuiz = await English_Questions.aggregate([
                { $sample: { size: parseInt(parseInt(req.body.numberOfQuestions)) } }
            ])
            res.json({ quizContent: randomQuiz })
        } else if (subject === "Physics") {
            const randomQuiz = await Physics_Questions.aggregate([
                { $sample: { size: parseInt(parseInt(req.body.numberOfQuestions)) } }
            ])
            console.log(randomQuiz)
            res.json({ quizContent: randomQuiz })
        } else if (subject === "Chemistry") {
            const randomQuiz = await Chemistry_Questions.aggregate([
                { $sample: { size: parseInt(parseInt(req.body.numberOfQuestions)) } }
            ])
            res.json({ quizContent: randomQuiz })
        } else if (subject === "Biology") {
            const randomQuiz = await Biology_Questions.aggregate([
                { $sample: { size: parseInt(parseInt(req.body.numberOfQuestions)) } }
            ])
            res.json({ quizContent: randomQuiz })
        }
    } catch (e) {
        console.log(e)
    }
}
module.exports = { getQuiz }