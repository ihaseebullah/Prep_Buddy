import React, { useState } from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import Gauge from "../components/Gauge";
import Authenticator from "../components/Authenticator";
import Page from "../components/Page";
import Chart from "../components/Chart";
import Banner from "../components/Banner";
import Leaderboard from "../components/Leaderboard";

const MyComponent = () => {
  const [guageValue, setGuageValue] = useState(55);
  const [gaugeTitleColor, setGaugeTitleColor] = useState("red");
  const handleUpdateColor = (color) => {
    setGaugeTitleColor(color);
  };
  return (
    <Authenticator>
      <Page>
        <Banner />
        <Divider />
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
              <Gauge updateColor={handleUpdateColor} value={guageValue} />
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
                {guageValue}%
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
              style={{backgroundColor:"#3B4483"}}
            >
              <div>
                <Typography
                  fontSize={60}
                  fontFamily={"Bungee Spice "}
                  className="text-gray-100"
                >
                  76
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
        <Typography className="py-2">Weekly Analytics</Typography>
        <Divider />
        <div
          style={{
            backgroundColor: "rgb(255,255,255,0.6)",
            WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
            backdropFilter: "blur(10px)",
          }}
          className=" rounded-md shadow-md my-2 py-3"
        >
          <Chart />
        </div>
        <br />
        <Divider />
        <br />
        <Leaderboard />
      </Page>
    </Authenticator>
  );
};

export default MyComponent;
