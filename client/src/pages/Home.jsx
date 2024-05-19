import React, { useContext, useEffect, useState } from "react";
import Page from "../components/Page";

import Banner from "../components/Banner";
import Pill from "../components/Pill";
import { Divider } from "@mui/material";
import SubjectCarousaleWrapper from "../components/SubjectCarousale";
import { CarouselTransition } from "../components/Qoutes";
import Authenticator from "../components/Authenticator";
import TestsCarousale from "../components/TestsCarousale";
import Leaderboard from "../components/Leaderboard";
import axios from "axios";

export default function Home() {
  const [savedData, setSavedData] = useState([]);
  useEffect(() => {
    axios.get("/analytics").then((res) => {
      setSavedData(res.data.Analytics?.saved);
    });
  }, []);
  return (
    <Authenticator>
      <Page>
        <Banner />
        <Pill />
        <Divider />
        <TestsCarousale />
        <Divider />
        <SubjectCarousaleWrapper />
        <Divider className="py-1" />
        <h1
          style={{ fontFamily: "Roboto,Kanit,Nunito", fontSize: "1rem" }}
          className="py-2"
        >
          Great sayings:
        </h1>
        <div style={{ paddingBottom: "3rem" }}>
          <CarouselTransition />
        </div>
        <Divider />
        <h1
          style={{ fontFamily: "Roboto,Kanit", fontSize: "1rem" }}
          className="pt-2"
        >
          Weekly Tests Leaderboard
        </h1>
        <Leaderboard leaderboard={[]} />
      </Page>
    </Authenticator>
  );
}
