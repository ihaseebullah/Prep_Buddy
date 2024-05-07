const mongoose = require("mongoose");
const { Questions } = require("../Database/QuestionSchema");
const questions = require("../Database/Questions").questions
function transformToComponentCompatible(originalData, developerData) {
    const {
        question,
        options,
        correct,
        explanation
    } = developerData;

    const {
        questionType = "text",
        answerSelectionType = "single",
        messageForCorrectAnswer,
        messageForIncorrectAnswer,
        point
    } = originalData;

    let correctAnswer;
    if (correct.toUpperCase() === "A" || correct.toLowerCase() === "a") {
        correctAnswer = "1";
    } else if (correct.toUpperCase() === "B") {
        correctAnswer = "2";
    } else if (correct.toUpperCase() === "C") {
        correctAnswer = "3";
    } else if (correct.toUpperCase() === "D") {
        correctAnswer = "4";
    } else {
        //  Handle other cases here if needed
    }
    return {
        question,
        questionType,
        answerSelectionType,
        answers: options,
        correctAnswer: correctAnswer,
        messageForCorrectAnswer,
        messageForIncorrectAnswer,
        explanation,
        point
    };
}

const developerData = {
    "question": "ReactJS is developed by _____?",
    "questionType": "text",
    "answerSelectionType": "single",
    "answers": [
        "Google Engineers",
        "Facebook Engineers"
    ],
    "correctAnswer": "2",
    "messageForCorrectAnswer": "Correct answer. Good job.",
    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
    "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "point": "1"
};

let FormattedData = []
JSON.parse(questions).map((yourData) => {
    let temp = transformToComponentCompatible(developerData, yourData);
    FormattedData.push(temp);
})


async function loadBulkData() {
    try {
        FormattedData.forEach(async (question) => {
            const newQuestion = new Questions({
                question: question.question,
                questionType: question.questionType,
                answerSelectionType: question.answerSelectionType,
                answers: question.answers,
                correctAnswer: question.correctAnswer,
                messageForCorrectAnswer: question.messageForCorrectAnswer,
                messageForIncorrectAnswer: question.messageForIncorrectAnswer,
                explanation: question.explanation,
                point: question.point,
                subject: "English"
            });
            await newQuestion.save()
        }).then(() => {
            console.log("All the questions are feeded to the DB")
        })

    } catch (e) {
        console.log(e)
    }
}

module.exports = { loadBulkData }