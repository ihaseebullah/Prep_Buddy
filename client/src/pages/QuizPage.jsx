import { CircularProgress, Typography } from "@mui/material";
import Page from "../components/Page";
import Quiz from "react-quiz-component";
import { quiz } from "../assets/data/quiz";
import FormattedData from "../assets/data/questions";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MainContext } from "../Context/Context";
import { QuizContext } from "../Context/QuizContext";
import Authenticator from "../components/Authenticator";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
export default function QuizPage() {
  const [quizResults, setQuizResults] = useState({});
  const { quizData } = useContext(QuizContext);
  const { userData } = useContext(AuthContext);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  const handleQuizResults = (quiz) => {
    console.log(quiz);
    axios
      .post("/quiz/results", { ...quiz, userData }, { headers })
      .then(toast.success("Data sent"));
  };

  return (
    <Authenticator>
      {quizData.quizTitle && quizData.questions.length > 0 ? (
        <Quiz
          quiz={quizData}
          shuffle={true}
          allowPauseTimer={true}
          timer={
            parseInt(quizData.optionsForm.time * 60) *
            quizData.optionsForm.numberOfQuestions
          }
          //Test Timer
          // timer={5}
          onComplete={handleQuizResults}
        />
      ) : (
        <Loader />
      )}
    </Authenticator>
  );
}
