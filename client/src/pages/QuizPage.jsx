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
import { ResultContext } from "../Context/ResultsContext";
import { useNavigate } from "react-router-dom";
import QuizResult from "../components/QuizResult";
export default function QuizPage() {
  const { quizData } = useContext(QuizContext);
  const { userData } = useContext(AuthContext);
  const { quizResult, setQuizResult } = useContext(ResultContext);
  const [showQuizResult, setShowQuizResults] = useState(false);
  const NavigateTo = useNavigate();
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  const handleQuizResults = (quiz) => {
    axios
      .post("/quiz/results", { ...quiz, userData }, { headers })
      .then(toast.success("Data sent"));
    setQuizResult(<QuizResult data={quiz} />);
    setShowQuizResults(true);
  };

  return (
    <Authenticator>
      {quizData.quizTitle && quizData.questions.length > 0 ? (
        <Quiz
          quiz={quizData}
          shuffle={true}
          allowPauseTimer={true}
          showDefaultResult={false}
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
      {showQuizResult ? quizResult : false}
    </Authenticator>
  );
}
