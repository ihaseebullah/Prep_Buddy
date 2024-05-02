import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
export default function HomeSkeleton() {
  return (
    <div className="p-4">
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton height={40} variant="text" sx={{ fontSize: "1rem" }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" height={160} />
        <Skeleton variant="rounded" height={60} />
      </Stack>
      <Grid container spacing={2}> 
          <Grid item xs={8}>
            <div>
              <Skeleton  height={160}/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Skeleton  height={160}/>
            </div>
          </Grid>
        </Grid>
        <Skeleton variant="rounded" height={60} />
    </div>
  );
}
