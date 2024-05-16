import { Avatar, Grid } from "@mui/material";
import IconButtons from "./IconButtons";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Banner() {
  const { userData } = useContext(AuthContext);
  return (
    <div className="">
      <Grid container>
        <Grid item xs={8}>
          <Avatar
            className="shadow-md"
            sx={{ width: "3rem", height: "3rem" }}
          />
        </Grid>
        <Grid item xs={4}>
          <div dir="ltr">
            <Grid container className="ps-[5%]" spacing={1}>
              <Grid item xs={6}>
                <IconButtons />
              </Grid>
              <Grid item xs={6}>
                <IconButtons icon={"bell"} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <div>
        <h1
          style={{ fontFamily: "Nunito,Roboto,Kanit", fontSize: "1.8rem" }}
          className="pt-7"
        >
          Hi,{" "}
          {userData.fullName
            ? userData.fullName
            : "User ain't have a full name"}
          !
        </h1>
      </div>
    </div>
  );
}
