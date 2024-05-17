import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Gauge from "./Gauge";
import { AuthContext } from "../Context/AuthContext";

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
            className="bg-gray-300 p-1 min-w-[8rem] text-center min-h-[8rem] shadow-md rounded-full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Gauge updateColor={handleUpdateColor} value={percentage} />

            <Typography
              fontSize={20}
              style={{
                marginTop: "-1rem",
                paddingBottom: "1.3rem",
                color: "#1976D2",
              }}
              fontFamily={"Bungee Spice "}
              textAlign="center"
            >
              {percentage}%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            className="p-6 min-w-[11rem] text-center min-h-[11rem] shadow-md rounded-full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "#3B4483" }}
          >
            <div>
              <Typography
                fontSize={60}
                fontFamily={"Bungee Spice "}
                className="text-gray-100"
              >
                {userData.streak}*
              </Typography>

              <Typography
                fontSize={20}
                textAlign={"center"}
                fontFamily={"Bungee Spice "}
                className="text-gray-100"
              >
                Streak
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
