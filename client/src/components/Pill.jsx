import HomeSkeleton from "../components/HomeSkeleton";
import Sidebar from "../components/Sidebar";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import quiz from "../assets/img/quiz.png";
import { Grid, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Pill() {
  //An effecient implementation is still necessary rather than this one !
  const [lastTest, setLastTest] = useState({});
  useEffect(() => {
    axios.get("/analytics").then((res) => {
      const lastIndex = res.data.Analytics.prevTestScores.length;
      const lastTestData = res.data.Analytics.prevTestScores[lastIndex - 1];
      setLastTest(lastTestData);
    });
  }, []);
  const styles = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(5.5px)", // Standard backdrop-filter property
    borderRadius: "12rem",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };
  return (
    <div
      style={styles}
      className="flex shadow-md items-center h-[5rem] rounded-[12rem] my-4 p-5"
    >
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={2} className="flex items-center justify-center">
          <div
            style={{
              backgroundColor: "#E1E1E1",
              minWidth: "4.5rem",
              minHeight: "4.5rem",
            }}
            className=" rounded-full shadow-lg flex justify-center items-center"
          >
            <div
              style={{ backgroundColor: "#3B4483", fontFamily: "nunito" }}
              className="rounded-full text-white  h-[3.5rem] w-[3.5rem] flex justify-center items-center"
            >
              {lastTest
                ? (lastTest.correctPoints / lastTest.totalPoints) * 100
                : "0"}
              %
            </div>
          </div>
        </Grid>

        <Grid item xs={8} className="flex justify-center">
          <Stack>
            <div className="flex-col text-white justify-between">
              <p style={{ fontFamily: "nunito", textAlign: "center" }}>
                {lastTest
                  ? lastTest.correctPoints + "/" + lastTest.totalPoints
                  : "00 / 00"}
              </p>
            </div>
            <div className="flex-col justify-last">
              <p style={{ fontFamily: "nunito" }} className="text-white mt-2">
                {lastTest ? "Score in the Last test" : "No tests yet"}
              </p>
            </div>
          </Stack>
        </Grid>

        <Grid item xs={2} className="flex items-center justify-center">
          <div
            style={{
              backgroundColor: "#E1E1E1",
              minWidth: "4.5rem",
              minHeight: "4.5rem",
            }}
            className="rounded-full shadow-lg flex justify-center items-center"
          >
            <div>
              <div
                className="rounded-full p-2 h-[3.5rem] w-[3.5rem] flex items-center justify-center"
                style={{ backgroundColor: "#3B4483" }}
              >
                <i
                  className="fa-solid fa-clipboard-list"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
