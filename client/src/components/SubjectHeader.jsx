import { Grid, Typography } from "@mui/material";

export default function SubjectHeader({ subject }) {
  const containerStyle = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(10px)", // Standard backdrop-filter property
    borderRadius: "1rem",
    margin: "0.5rem",
    marginTop: "0.3rem",
    overflow: "auto", // Change to auto to allow scrolling when needed
  };
  return (
    <div style={containerStyle} className="p-2">
      <Typography
        className="text-gray-800"
        variant="h1"
        fontFamily="Nunito"
        fontSize="1.5rem"
        color={"white"}
      >
        {subject}: Customize Your Quiz
      </Typography>
    </div>
  );
}
