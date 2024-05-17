import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import Authenticator from "../components/Authenticator";
import Page from "../components/Page";
import Chart from "../components/Chart";
import Banner from "../components/Banner";
import Leaderboard from "../components/Leaderboard";
import axios from "axios";
import GuageAndStreak from "../components/GuageAndStreak";

const MyComponent = () => {
  const [allTimeResults, setAllTimeResults] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    axios.get("/analytics").then((res) => {
      setAllTimeResults(res.data.Analytics.prevTestScores);
      setLeaderboard(res.data.Analytics.leaderBoard);
    });
  }, []);

  useEffect(() => {
    let obtained = 0;
    let attempted = 0;
    allTimeResults.map((results) => {
      obtained += parseInt(results.correctPoints);
      attempted += parseInt(results.totalPoints);
    });
    setPercentage(Math.round((obtained / attempted) * 100));
  }, [allTimeResults]);
  return (
    <Authenticator>
      <Page>
        <Banner />
        <Divider />
        <GuageAndStreak percentage={percentage} />
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
        <Typography className="py-2">Leaderboard</Typography>
        <Divider />
        <Leaderboard leaderboard={leaderboard} />
      </Page>
    </Authenticator>
  );
};

export default MyComponent;
