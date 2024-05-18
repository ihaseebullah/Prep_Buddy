import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loader({ title }) {
  const containerStyle = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(10px)", // Standard backdrop-filter property
    borderRadius: "1rem",
    padding: "1rem",
    marginBottom: "5rem",
    border: "none",
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div style={containerStyle}>
        <div className="flex flex-col items-center">
          <CircularProgress style={{ color: "white" }} />{" "}
          <p className="text-white" style={{ fontFamily: "Nunito" }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
