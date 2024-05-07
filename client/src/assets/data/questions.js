const questions = `[{
    "question": "Find error “Smoking is undoubtedly very injurious for health”.",
    "options": [
        "A. Smoking is undoubtedly",
        "B. Very injurious",
        "C. For health",
        "D. No error"
    ],
    "correct": "C",
    "explanation": "Replace ‘for’ with ‘to’. ‘Injurious’ is followed by preposition ‘to’."
},
{
    "question": "Find error “these all mangoes are ripe”: ",
    "options": [
        "A. These all",
        "B. Mangoes",
        "C. Areripe",
        "D. No error"
    ],
    "correct": "A",
    "explanation": "The sequence of the sentence is wrong. It should be ‘all these mangoes are ripe’."
},
{
    "question": "Identify error “Her knowledge in English gives her great advantage over me”.",
    "options": [
        "A. Her knowledge in English",
        "B. Gives her great advantage",
        "C. Over me",
        "D. No error"
    ],
    "correct": "A",
    "explanation": "It is preposition related error. Hence, Her knowledge of English.... Should be used here. E.g He has a wide knowledge of painting and music."
},
{
    "question": "Trust God.",
    "options": [
        "A. On",
        "B. In",
        "C. To",
        "D. None"
    ],
    "correct": "B",
    "explanation": "Usually in is used after trust or ‘believe’. E.g We trust in one God"
},
{
    "question": "NEPOTISM means",
    "options": [
        "A. Criticism",
        "B. Socialism",
        "C. Favoritism",
        "D. Monotheism"
    ],
    "correct": "C",
    "explanation": "Nepotism is the practice among those with power or influence of favoring relatives, friends, or associates, especially by giving them jobs or in simple words ‘favoritism’."
},
{
    "question": "Add some milk and sugar ________inyour tea.",
    "options": [
        "A. To",
        "B. In",
        "C. On",
        "D. Into"
    ],
    "correct": "A",
    "explanation": "You should use ‘add to’ when the sentence specifies what is receiving the sugar and ‘add in’(or just ‘add’) when it doesn’t. Compare [have a glass of milk. Can I add sugar to it? Vs I have a glass of milk. Can I add in sugar?"
},
{
    "question": "Pakistan has to fight to win the test series from India.",
    "options": [
        "A. Dagger and Sword",
        "B. Lame and Lime",
        "C. Tooth and Nail",
        "D. Sweat and Water"
    ],
    "correct": "C",
    "explanation": "‘To fight tooth and nail’ is an idiom meaning to try hard and make effort to get something you want."
},
{
    "question": "The number of friends and family members at the party amazing.",
    "options": [
        "A. Was",
        "B. Were",
        "C. Had",
        "D. Have had"
    ],
    "correct": "A",
    "explanation": "‘was’ is a singular verb used according to the single unit ‘ the number of’."
},
{
    "question": "When she was in the university, she wake up early in the morning.",
    "options": [
        "A. Can",
        "B. would",
        "C. will",
        "D. would have"
    ],
    "correct": "B",
    "explanation": "When it comes to talking about repeated past actions, ‘would’ is used."
},
{
    "question": "Yesterday she got a call from her old friend, the friend __her the whole story.",
    "options": [
        "A. tell",
        "B. tells",
        "C. told",
        "D. Has been telling"
    ],
    "correct": "C",
    "explanation": "The first clause of the sentence is in past tense, therefore the second clause will also use a past tense verb. Here ‘told’."
}]`


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
        // Handle other cases here if needed
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
export default FormattedData;



