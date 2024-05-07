import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "../pages/Home";
import SelectedSubject from "../pages/SelectedSubject";
import QuizPage from "../pages/QuizPage";
import Page from "../components/Page";
import { Typography } from "@mui/material";

export default function Router() {
  const SelectedSubjectWrapper = () => {
    const { subject } = useParams();
    return <SelectedSubject subject={subject} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QUIZ/English" element={<QuizPage />} />
        <Route
          path="/*"
          element={
            <Page>
              <Typography>
                Roor bas lag sbar rata oka pa dai page kar shoro di.English Check ka!
              </Typography>
            </Page>
          }
        />
        <Route
          path="/selectedSubject/:subject"
          element={<SelectedSubjectWrapper />}
        />
      </Routes>
    </BrowserRouter>
  );
}
