const mongoose = require("mongoose")
const { English_Questions, Physics_Questions, Chemistry_Questions, Biology_Questions } = require("../Database/QuestionSchema")
async function getQuiz(req, res) {
    const { subject, noOfMcqs } = req.params
    try {
        if (subject === "English") {
            const randomQuiz = await English_Questions.aggregate([
                { $sample: { size: parseInt(noOfMcqs) } }
            ])
            res.json({ quizContent: randomQuiz })
        } else if (subject === "Physics") {
            const randomQuiz = Physics_Questions.aggregate([
                { $sample: { size: noOfMcqs } }
            ]).exec
            console.log(randomQuiz)
            res.json({ quizContent: randomQuiz })
        } else if (subject === "Chemistry") {
            const randomQuiz = Chemistry_Questions.aggregate([
                { $sample: { size: noOfMcqs } }
            ]).exec
            res.json({ quizContent: randomQuiz })
        } else if (subject === "Biology") {
            const randomQuiz = Biology_Questions.aggregate([
                { $sample: { size: noOfMcqs } }
            ]).exec
            res.json({ quizContent: randomQuiz })
        }
    } catch (e) {
        console.log(e)
    }
}
module.exports = { getQuiz }