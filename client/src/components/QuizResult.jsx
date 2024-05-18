import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import quizData from "../subComponents/data";
import DoneIcon from "@mui/icons-material/Done";
import Loader from "./Loader";
import { ResultContext } from "../Context/ResultsContext";

const QuizResult = ({ data }) => {
  const percentage = (data.correctPoints / data.totalPoints) * 100;
  const isPass = percentage >= 50;

  return (
    <React.Fragment>
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
              <Typography variant="h5">Congratulations! You passed!</Typography>
            </>
          ) : (
            <Typography variant="h5">Sorry, you didn't pass.</Typography>
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
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1">To pass: 50% or higher</Typography>
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
                        marginLeft: "2rem",
                      }}
                    >
                      {question.messageForIncorrectAnswer}
                    </Typography>
                    <Typography>Explanation : </Typography>
                    <Typography>{question.explanation}</Typography>
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
                        marginLeft: "2rem",
                      }}
                    >
                      {question.messageForCorrectAnswer.substring(0,7)}
                    </Typography>
                    <Typography>{question.explanation}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default QuizResult;
