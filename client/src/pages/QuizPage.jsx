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
export default function QuizPage() {
  const [quizResults, setQuizResults] = useState({});
  const { quizData } = useContext(QuizContext);
  // useEffect(() => {
  //   axios.get("/getQuiz/English/4").then((res) => {
  //     setQuizData({
  //       quizTitle: "English Test",
  //       quizSynopsis:
  //         "Start the quiz, read each question carefully, and select your answer. Once submitted, answers cannot be changed, so choose wisely. Proceed through all questions, then submit your quiz for evaluation. Review your results and use feedback to improve. Enjoy the quiz-taking experience!",
  //       questions: [...res.data.quizContent],
  //     });
  //   });
  // }, []);

  const handleQuizResults = (quiz) => {
    console.log(quiz);
  };
  // console.log(FormattedData);
  // const quizData = {
  //   quizTitle: "Practice Test",
  //   quizSynopsis:
  //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  //   nrOfQuestions: "4",
  //   questions: [...FormattedData],
  // };
  return (
    <Authenticator>
      {quizData.quizTitle && quizData.questions.length > 0 ? (
        <Quiz
          quiz={quizData}
          shuffle={true}
          allowPauseTimer={true}
          // timer={
          //   parseInt(quizData.optionsForm.time * 60) *
          //   quizData.optionsForm.numberOfQuestions
          // }
          //Test Timer
          timer={5}
          onComplete={handleQuizResults}
        />
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center">
            <CircularProgress />
          </div>
        </div>
      )}
    </Authenticator>
  );
}
