import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "../pages/Home";
import SelectedSubject from "../pages/SelectedSubject";
import QuizPage from "../pages/QuizPage";
import Page from "../components/Page";
import { Typography } from "@mui/material";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Analytics from "../pages/Analytics";
import SavedQuiz from "../components/SavedQuiz";

// quiz page import

export default function Router() {
  const { isLoggedIn, setIsLoggedin, userData, setUserData } =
    useContext(AuthContext);
  const SelectedSubjectWrapper = () => {
    const { subject } = useParams();
    return <SelectedSubject subject={subject} />;
  };
  const SavedQuizResultWrapper = () => {
    const { id } = useParams();
    return <SavedQuiz quizId={id} />;
  };
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={isLoggedIn === true ? <Home /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/QUIZ"
          element={isLoggedIn === true ? <QuizPage /> : <Login />}
        />
        <Route
          path="/Analytics"
          element={isLoggedIn === true ? <Analytics /> : <Login />}
        />
        <Route path="/saved/results/:id" element={<SavedQuizResultWrapper />} />
        <Route
          path="/selectedSubject/:subject"
          element={<SelectedSubjectWrapper />}
        />

        <Route
          path="/*"
          element={
            <Page>
              <Typography>404 Not Found!</Typography>
            </Page>
          }
        />
        {/* DUMMY QUIZ RESULT PAGE */}
      </Routes>
    </BrowserRouter>
  );
}
