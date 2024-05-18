import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { quiz } from "../assets/data/quiz";

const QuizData = () => {
  const [data, setData] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    setData(quiz);
  }, []);

  useEffect(() => {
    if (data) {
      let total = 0;
      data.questions.forEach((question) => {
        total += parseInt(question.point, 10);
      });
      setTotalPoints(total);
    }
  }, [data]);

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted answers:", answers);
  };

  if (!data) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Box height="30vh" width="100vw">
        <Box padding="1rem 1rem">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginBottom: "0.3rem",
            }}
          >
            <Typography variant="caption">
              Graded Quiz • {totalPoints} total points
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "0.3rem" }}>
            <Typography variant="h5">{data.quizTitle}</Typography>
          </Box>
          <Box>
            <Typography>Total Questions : {data.nrOfQuestions}</Typography>
          </Box>
          <Box sx={{ marginBottom: "0.3rem" }}>
            <Typography variant="caption" color="purple">
              {data.quizSynopsis}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />

      {/* Questions */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ margin: "0.6rem 0.3rem" }}>
          {data.questions.map((question, index) => (
            <Box key={index} sx={{ marginBottom: "1rem" }}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "90%" }}>
                  <Typography variant="subtitle1">
                    {index + 1}. {question.question}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#cfd8dc",
                    width: "20%",
                    padding: "0.2rem",
                    borderRadius: 1,
                  }}
                >
                  {question.point} point
                </Box>
              </Box>

              <Box>
                <RadioGroup
                  aria-labelledby={`question-${index}`}
                  name={`question-${index}`}
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {question.answers.map((answer, i) => (
                    <Box key={i} display="flex" alignItems="center">
                      <FormControlLabel
                        value={String(i + 1)}
                        control={<Radio />}
                        label={
                          <Typography
                            sx={{ fontSize: "0.8rem", fontWeight: "small" }}
                          >
                            {answer}
                          </Typography>
                        }
                      />
                    </Box>
                  ))}
                </RadioGroup>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
        >
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default QuizData;
