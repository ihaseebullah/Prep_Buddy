import { Typography } from "@mui/material";
import Page from "../components/Page";
import Quiz from "react-quiz-component";
import { quiz } from "../assets/data/quiz";
import FormattedData from "../assets/data/questions";
export default function QuizPage() {
  const quizData = {
    quizTitle: "Practice Test",
    quizSynopsis:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    nrOfQuestions: "4",
    questions: [...FormattedData],
  };
  console.log(quizData);
  return (
    <Quiz quiz={quizData} shuffle={true} allowPauseTimer={true} timer={60} />
  );
}
