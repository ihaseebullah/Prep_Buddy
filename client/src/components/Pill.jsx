import HomeSkeleton from "../components/HomeSkeleton";
import Sidebar from "../components/Sidebar";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import quiz from "../assets/img/quiz.png";
import { Grid, Skeleton, Stack } from "@mui/material";
export default function Pill() {
  return (
    <div
      style={{ backgroundColor: "#f04324" }}
      className="flex shadow-md items-center h-[5rem] rounded-[12rem] my-4 p-5"
    >
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={2} className="flex items-center justify-center">
          <div
            style={{
              backgroundColor: "#EFEAE8",
              minWidth: "4.5rem",
              minHeight: "4.5rem",
            }}
            className=" rounded-full shadow-lg flex justify-center items-center"
          >
            <div
              style={{ backgroundColor: "red", fontFamily: "nunito" }}
              className="rounded-full text-white  h-[3.5rem] w-[3.5rem] flex justify-center items-center"
            >
              40%
            </div>
          </div>
        </Grid>

        <Grid item xs={8} className="flex justify-center">
          <Stack>
            <div className="flex-col text-white justify-between">
              <p style={{ fontFamily: "nunito", textAlign: "center" }}>
                100/120
              </p>
            </div>
            <div className="flex-col justify-last">
              <p style={{ fontFamily: "nunito" }} className="text-white mt-2">
                Score in the Last test
              </p>
            </div>
          </Stack>
        </Grid>

        <Grid item xs={2} className="flex items-center justify-center">
          <div
            style={{
              backgroundColor: "#EFEAE8",
              minWidth: "4.5rem",
              minHeight: "4.5rem",
            }}
            className="rounded-full shadow-lg flex justify-center items-center"
          >
            <div>
              <div className="rounded-full p-2 h-[3.5rem] w-[3.5rem] flex items-center justify-center" style={{backgroundColor:"red"}}>
                <i
                  class="fa-solid fa-clipboard-list"
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
