import { Typography } from "@mui/material";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function NumberCounter({streak}) {
  return (
    <div className="flex justify-center">
      <Typography
        fontSize={60}
        className="text-gray-300"
        fontFamily={"Poetsen "}
        textAlign="center"
      >
        <AnimatedNumbers
          includeComma
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          className="text-center"
          animateToNumber={streak}
        />
      </Typography>
    </div>
  );
}
