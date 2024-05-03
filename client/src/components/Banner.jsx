import { Avatar, Grid } from "@mui/material";
import IconButton from "./IconButtons";

export default function Banner() {
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
                <IconButton />
              </Grid>
              <Grid item xs={6}>
                <IconButton icon={"bell"} />
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
          Hello, Haseeb Ullah!
        </h1>
      </div>
    </div>
  );
}
