const mongoose = require("mongoose");
const { English_Questions, Biology_Questions, Chemistry_Questions, Physics_Questions } = require("../Database/QuestionSchema");
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


async function loadBulkData(req, res) {
    const { subject } = req.params;
    try {
        let i = 0;
        for (const question of FormattedData) {
            const insertable = {
                question: question.question,
                questionType: question.questionType,
                answerSelectionType: question.answerSelectionType,
                answers: question.answers,
                correctAnswer: (question.correctAnswer),
                messageForCorrectAnswer: question.messageForCorrectAnswer,
                messageForIncorrectAnswer: question.messageForIncorrectAnswer,
                explanation: question.explanation,
                point: (question.point),
                subject: "English"
            };

            async (subject, insertable) => {
                try {
                    let newQuestion;
                    switch (subject) {
                        case "Physics":
                            newQuestion = new Physics_Questions(insertable);
                            break;
                        case "Biology":
                            newQuestion = new Biology_Questions(insertable);
                            break;
                        case "Chemistry":
                            newQuestion = new Chemistry_Questions(insertable);
                            break;
                        case "English":
                            newQuestion = new English_Questions(insertable);
                            break;
                        default:
                            throw new Error("Invalid subject");
                    }
                    await newQuestion.save();
                    console.log("Data Feeded");
                } catch (e) {
                    console.error("Error saving question:", e.message);
                }
            }
        }
        res.status(200).json({ message: `${i} number of MCQs data has been uploaded successfully` });
    } catch (error) {
        console.error("Error loading bulk data:", error);
        res.status(500).json({ error: "An error occurred while loading bulk data" });
    }
}


module.exports = { loadBulkData }