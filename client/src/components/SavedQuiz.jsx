import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AiModal from "./AiModal";
import DoneIcon from "@mui/icons-material/Done";
import quizData from "../subComponents/data";
import Loader from "./Loader";
import Navigation from "./Navigation";

export default function SavedQuiz({ quizId }) {
  const [data, setData] = useState();
  async function getQuiz() {
    await axios.get("/quiz/saved/" + quizId).then((res) => {
      setData(res.data.savedQuiz.quiz);
    });
  }
  useEffect(() => {
    getQuiz();
  }, [quizId]);
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
  const percentage = data && (data.correctPoints / data.totalPoints) * 100;
  const isPass = percentage >= 50;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  const [initialPrompt, setInitialPrompt] = useState("");

  const aiClickHandler = (data) => {
    const question = data.question;
    const answerIndex = parseInt(data.correctAnswer);
    const answer = data.answers[answerIndex - 1];

    const prompt = `Here is a question : ${question} , all the options were \n ${data.answers} and the correct option was :\n ${answer}, can you justify the answer and why the other options were incorrect?`;
    console.log(prompt);
    setInitialPrompt(prompt);
    handleAiOpen();
  };
  return (
    <>
      {!data ? (
        <Loader title={"Loading "} />
      ) : (
        <React.Fragment>
          {aiOpen && (
            <AiModal close={handleAiClose} initialPrompt={initialPrompt} />
          )}

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
              const userAnswerIndex = parseInt(data.userInput[index]);
              const isCorrect =
                userAnswerIndex === parseInt(question.correctAnswer);
              console.log(isCorrect);
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
                          control={
                            <Radio checked={userAnswerIndex === i + 1} />
                          }
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
                        className="rounded-full"
                      variant="outlined"
                      onClick={() => aiClickHandler(question)}
                    >
                      Ask ai
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </React.Fragment>
      )}
      <div className="flex justify-center">
        <Navigation />
      </div>
    </>
  );
}
