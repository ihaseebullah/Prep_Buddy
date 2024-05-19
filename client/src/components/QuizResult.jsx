import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import quizData from "../subComponents/data";
import DoneIcon from "@mui/icons-material/Done";
import Loader from "./Loader";
import { ResultContext } from "../Context/ResultsContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { SaveQuizAs } from "./Modals";

import AiModal from "./AiModal";

const QuizResult = () => {
  const data = quizData;
  //Modal States
  const [open, setOpen] = React.useState(false);
  const [saved, setSaved] = useState(false);

  // Ai Modal
  const [aiOpen, setAiOpen] = useState(false);
  const handleAiOpen = () => setAiOpen(true);
  const handleAiClose = () => setAiOpen(false);
  //
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Component States
  const NavigateTo = useNavigate();
  const percentage = (data.correctPoints / data.totalPoints) * 100;
  const isPass = percentage >= 50;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  const saveResult = async (saveDetails) => {
    // console.log({ ...data, ...saveDetails });
    await axios
      .post(
        "/quiz/results/saveFavourite",
        { ...saveDetails, quiz: data },
        { headers }
      )
      .then((res) => {
        if (res.status === 200) {
          setSaved(true);
          handleClose();
          toast.success(res.data.message);
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  const [initialPrompt, setInitialPrompt] = useState("");

  const aiClickHandler = (data) => {
    let answers = "";
    data.answers.map((answer) => (answers += answer));

    const question = data.question;
    const answerIndex = parseInt(data.correctAnswer);
    const answer = data.answers[answerIndex - 1];

    const prompt = `Here is a question : ${question} , all the options were \n ${data.answers} and the correct option was :\n ${answer}, can you justify the answer ?`;
    console.log(prompt);
    setInitialPrompt(prompt);
    handleAiOpen();
  };
  return (
    <React.Fragment>
      {aiOpen && (
        <AiModal close={handleAiClose} initialPrompt={initialPrompt} />
      )}
      {/* Modal For Saving quiz As */}
      <SaveQuizAs
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        saveResult={saveResult}
      />
      {/* Pass/Fail Box */}
      <Box
        backgroundColor={isPass ? "#e0f2f1" : "#ffebee"}
        sx={{
          display: "flex",
          height: "20vh",
          width: "100vw",

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "1rem 1rem",
            alignItems: "center",
          }}
        >
          {isPass ? (
            <>
              <DoneIcon color="success" sx={{ marginRight: "0.3rem" }} />
              <Typography variant="h5">
                Congratulations! You Out Performed Sire!
              </Typography>
            </>
          ) : (
            <Box>
              <Typography textAlign={"center"} variant="h5">
                You'll cover it soon.
              </Typography>
            </Box>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1">Grade received:</Typography>
          <Typography
            color={isPass ? "green" : "red"}
            sx={{ marginLeft: "0.3rem" }}
          >
            {percentage}%
          </Typography>
        </Box>
        <Box>
          <Typography textAlign={"center"} variant="subtitle1">
            To pass: 50% or higher
          </Typography>
        </Box>
      </Box>

      {/* Quiz Questions and Options */}
      <Box sx={{ marginLeft: "0.2rem", marginTop: "2rem" }}>
        {data.questions.map((question, index) => {
          const userAnswerIndex = data.userInput[index];
          const isCorrect =
            userAnswerIndex === parseInt(question.correctAnswer);

          return (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              marginBottom="1rem"
            >
              {/* Quiz Question */}
              <Box
                display="flex"
                width="98vw"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <Box width="90%">
                  <Typography variant="h6" paddingRight="0.2rem">
                    {index + 1}.
                  </Typography>
                  <Typography>{question.question}</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#cfd8dc",
                    width: "10%",
                    padding: "0.2rem",
                    textAlign: "center",
                    borderRadius: 1,
                    fontWeight: "bold",
                  }}
                >
                  {isCorrect ? "1/1 " : "0/1 "}
                </Box>
              </Box>

              {/* Quiz Options */}
              <RadioGroup
                aria-labelledby={`question-${index}`}
                name={`question-${index}`}
                value={data.userInput[index]}
              >
                {question.answers.map((answer, i) => (
                  <Box key={i} display="flex" alignItems="center">
                    <FormControlLabel
                      value={i + 1}
                      control={<Radio checked={userAnswerIndex === i + 1} />}
                      label={answer}
                      disabled
                    />
                  </Box>
                ))}
              </RadioGroup>

              {!isCorrect ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "98vw",
                  }}
                >
                  <Box
                    backgroundColor="#ffebee"
                    width="100%"
                    sx={{ borderRadius: 1, padding: "1rem 1rem" }}
                  >
                    <Typography
                      sx={{
                        color: isCorrect ? "green" : "red",
                      }}
                    >
                      {question.messageForIncorrectAnswer.substring(0, 9)} :{" "}
                      {question.explanation}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "98vw",
                  }}
                >
                  <Box
                    backgroundColor="#e0f2f1"
                    width="100%"
                    sx={{ borderRadius: 1, padding: "1rem 1rem" }}
                  >
                    <Typography
                      sx={{
                        color: isCorrect ? "green" : "red",
                      }}
                    >
                      {question.messageForCorrectAnswer.substring(0, 7)}:{" "}
                      {question.explanation}
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box>
                <Button
                  variant="outlined"
                  onClick={() => aiClickHandler(question)}
                >
                  Ask ai to explain
                </Button>
              </Box>
            </Box>
          );
        })}
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <button
                onClick={() => NavigateTo("/")}
                className="bg-blue-800 p-3 rounded-lg text-white font-bold w-[8rem]"
              >
                Exit Room
              </button>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <button
                onClick={handleOpen}
                disabled={saved ? true : false}
                className={` p-3 rounded-lg ${
                  saved ? "text-gray-300 bg-blue-600" : "text-white bg-blue-800"
                }  font-bold w-[8rem]`}
              >
                {saved ? "Saved" : "Save Quiz"}
              </button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default QuizResult;
