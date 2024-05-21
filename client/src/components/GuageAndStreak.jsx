import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Gauge from "./Gauge";
import { AuthContext } from "../Context/AuthContext";
import NumberCounter from "./NumberCounter";

export default function GuageAndStreak({ percentage }) {
  const [gaugeTitleColor, setGaugeTitleColor] = useState("red");
  const [guageValue, setGuageValue] = useState(55);
  const { userData } = useContext(AuthContext);
  const handleUpdateColor = (color) => {
    setGaugeTitleColor(color);
  };
  return (
    <div>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Box
            className="bg-gray-300 p-1 min-w-[6rem] text-center min-h-[7.7rem] shadow-md rounded-lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Gauge updateColor={handleUpdateColor} value={percentage} />
          </Box>
          <Box
            className="bg-gray-300 mt-3 p-1 min-w-[6rem] text-center max-h-[4rem] shadow-md rounded-lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontSize={20}
              style={{
                color: "#1976D2",
              }}
              fontFamily={"Roboto "}
              textAlign="center"
            >
              Performance {percentage}%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            className="bg-gray-300 p-1  min-w-[6rem] text-center max-h-[4rem] shadow-md rounded-lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "#3B4483" }}
          >
            <Typography
              fontSize={20}
              className="text-gray-300"
              fontFamily={"Roboto "}
              textAlign="center"
            >
              Current Streak
            </Typography>
          </Box>
          <Box
            className="bg-gray-300 mt-3 p-1  min-w-[6rem] text-center min-h-[8.5rem] shadow-md rounded-lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "#3B4483" }}
          >
            {/* <Gauge updateColor={handleUpdateColor} value={percentage} /> */}

            <NumberCounter streak={userData.streak} />
          </Box>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
