import {
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import SubjectHeader from "./SubjectHeader";
import { useContext, useState } from "react";
import axios from "axios";
import { MainContext } from "../Context/Context";
import { QuizContext } from "../Context/QuizContext";
export default function OptionsPage({ subject }) {
  const [optionsForm, setOptionsForm] = useState({
    difficultyLevel: "Learning Lagoon",
    numberOfQuestions: 10,
    topics: [],
  });
  const { setQuizData } = useContext(QuizContext);
  const [loading, setLoading] = useState(false);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  const NavigateTo = useNavigate();
  const difficultyLevels = ["Gold", "Diamond", "Platinum"];
  const containerStyle = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(10px)", // Standard backdrop-filter property
    margin: "0.5rem",
    marginTop: "1rem",
    overflow: "auto", // Change to auto to allow scrolling when needed
  };
  const handleDelete = (key) => {
    if (optionsForm.topics?.length > 0) {
      let newArray = optionsForm.topics.filter((item) => {
        return item !== key;
      });
      setOptionsForm({ ...optionsForm, topics: newArray });
    }
  };
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        `/getQuiz/${subject}`,
        { ...optionsForm, subject: subject },
        { headers }
      )
      .then(async (res) => {
        console.log(res.data);

        const data = await res.data.quizContent;
        setQuizData({
          quizTitle: "English Test",
          quizSynopsis:
            "Start the quiz, read each question carefully, and select your answer. Once submitted, answers cannot be changed, so choose wisely. Proceed through all questions, then submit your quiz for evaluation. Review your results and use feedback to improve. Enjoy the quiz-taking experience!",
          questions: [...data],
          optionsForm: optionsForm,
        });

        setLoading(false);
        NavigateTo("/QUIZ");
      });
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen pb-[10rem]">
          <div style={containerStyle} className="p-3 rounded-md text-white">
            <div className="flex flex-col items-center ">
              <CircularProgress variant="indeterminate" />
            </div>
            &nbsp;&nbsp;Getting Ready
          </div>
        </div>
      ) : (
        <div
          style={{
            ...containerStyle,
            background: "rgba(240, 240, 240, 0.1)",
            WebkitBackdropFilter: "blur(30px)", // For Webkit browsers
            backdropFilter: "blur(5px)", // Standard backdrop-filter property
            marginRight: "-0rem", // Adjusted margin to fit scrollbar
            marginLeft: "-0rem", // Adjusted margin to fit scrollbar
            maxHeight: "calc(100vh - 2.5rem)", // Adjusted maximum height for better fitting
            padding: "0.5rem", // Added padding for better appearance
            opacity: "1",
          }}
          className="p-2"
        >
          <SubjectHeader subject={subject} />

          <div
            className=""
            style={{
              marginTop: "1rem",
              minHeight: "90vh",
              opacity: `${loading ? "0.1" : "1"}`,
            }}
          >
            <div
              style={{ background: "rgba(240, 240, 240, 0.5)" }}
              className=" my-2  shadow  rounded-[1rem] p-3"
            >
              <span style={{ marginBottom: "0.5rem" }}>
                <Typography fontFamily={"Roboto"} color={"gray"}>
                  Choose topics
                </Typography>
              </span>
              <span>
                {[...Array(3).keys()].map((item, index) => {
                  return (
                    <Chip
                      label="Deletable"
                      style={{ margin: "0.2rem" }}
                      onClick={() =>
                        setOptionsForm({
                          ...optionsForm,
                          topics: optionsForm.topics
                            ? [...optionsForm.topics, difficultyLevels[item]]
                            : [difficultyLevels[item]],
                        })
                      }
                      variant={
                        optionsForm &&
                        optionsForm.topics?.includes(difficultyLevels[item])
                          ? ""
                          : "outlined"
                      }
                      onDelete={
                        optionsForm &&
                        optionsForm.topics?.includes(difficultyLevels[item])
                          ? () => handleDelete(difficultyLevels[item])
                          : undefined
                      }
                    />
                  );
                })}
              </span>
              <br />
              <br />
              <span style={{ marginBottom: "0.5rem" }}>
                <Typography fontFamily={"Roboto"} color={"gray"}>
                  Choose Number Of Questions
                </Typography>
              </span>
              <span>
                {[...Array(20).keys()].map((item, index) => {
                  return (
                    <Chip
                      label={(index + 1) * 10}
                      style={{ margin: "0.2rem" }}
                      onClick={() =>
                        setOptionsForm({
                          ...optionsForm,
                          numberOfQuestions: (index + 1) * 10,
                        })
                      }
                      variant={
                        optionsForm &&
                        optionsForm.numberOfQuestions === (index + 1) * 10
                          ? ""
                          : "outlined"
                      }
                      onDelete={
                        optionsForm &&
                        optionsForm.numberOfQuestions !== (index + 1) * 10
                          ? undefined
                          : () =>
                              setOptionsForm({
                                ...optionsForm,
                                numberOfQuestions: 10,
                              })
                      }
                    />
                  );
                })}
              </span>
              <br />
              <br />
              <span style={{ marginBottom: "0.5rem" }}>
                <Typography fontFamily={"Roboto"} color={"gray"}>
                  Choose Difficulty Level
                </Typography>
              </span>
              <span>
                {[...difficultyLevels].map((item, index) => {
                  return (
                    <Chip
                      label={item}
                      style={{ margin: "0.2rem" }}
                      onClick={() => {
                        setOptionsForm({
                          ...optionsForm,
                          difficultyLevel: item,
                        });
                      }}
                      variant={`${
                        optionsForm?.difficultyLevel != item ? "outlined" : ""
                      }`}
                    />
                  );
                })}
              </span>
              <br />
              <br />
              <span style={{ marginBottom: "0.5rem" }}>
                <Typography fontFamily={"Roboto"} color={"gray"}>
                  Time for each question
                </Typography>
              </span>
              <span>
                {[...Array(4).keys()].map((item, index) => {
                  return (
                    <Chip
                      label={`${
                        (item + 1) / 2 < 1.1
                          ? (item + 1) / 2 + " minute"
                          : (item + 1) / 2 + " minutes"
                      }`}
                      style={{ margin: "0.2rem" }}
                      onClick={() =>
                        setOptionsForm({ ...optionsForm, time: (item + 1) / 2 })
                      }
                      variant={
                        optionsForm && optionsForm.time === (item + 1) / 2
                          ? ""
                          : "outlined"
                      }
                    />
                  );
                })}
              </span>
              <div className="p-1">
                <Grid container>
                  <Grid item xs={9}>
                    <Checkbox
                      disabled={
                        optionsForm.difficultyLevel && optionsForm.time
                          ? false
                          : true
                      }
                      onClick={() => {
                        setOptionsForm({
                          ...optionsForm,
                          oath: !optionsForm.oath,
                        });
                      }}
                    />
                    <span
                      style={{ fontSize: "1", fontFamily: "Nunito" }}
                      className="text-gray-600"
                    >
                      I pledge not to cheat.
                    </span>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className="pt-1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        disabled={
                          optionsForm.oath &&
                          optionsForm.topics?.length > 0 &&
                          optionsForm.numberOfQuestions
                            ? false
                            : true
                        }
                        variant="outlined"
                        onClick={handleSubmit}
                        size="small"
                        endIcon={<i class="fa-solid fa-play"></i>}
                      >
                        Start
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
