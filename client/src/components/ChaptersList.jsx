import { Grid, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import SubjectHeader from "./SubjectHeader";

export default function ChapersList({ subject }) {
  const NavigateTo = useNavigate();

  const containerStyle = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(10px)", // Standard backdrop-filter property
    margin: "0.5rem",
    marginTop: "1rem",
    overflow: "auto", // Change to auto to allow scrolling when needed
  };
  return (
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
      }}
      className="p-2"
    >
      <SubjectHeader subject={subject} />
      <div className="" style={{ marginTop: "1rem" }}>
        {[...Array(20).keys()].map((index) => (
          <div
            onClick={() => NavigateTo(`/QUIZ/${subject}`)}
            style={{ background: "rgba(240, 240, 240, 0.5)" }}
            key={index}
            className=" my-2  shadow  rounded-[1rem] p-3"
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h6">
                  {" "}
                  <p className="text-gray-800">Chapter {index + 1}</p>{" "}
                </Typography>
              </Grid>
              <Grid ite xs={4} className="flex justify-end">
                <button
                  style={{ background: "rgba(53, 83, 191, 0.8)" }}
                  className="rounded-lg bg-blue-700 p-1 shadow-md text-gray-200"
                >
                  Attempt
                </button>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}
