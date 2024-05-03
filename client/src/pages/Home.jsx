import React from "react";
import Page from "../components/Page";

import Banner from "../components/Banner";
import Pill from "../components/Pill";
import { Divider } from "@mui/material";
import SubjectCarousale from "../components/SubjectCarousale";
// import SubjectCard from "../components/SubjectCards";

export default function Home() {
  return (
    <Page>
      <Banner />
      <Pill />
      <Divider />
      <div>
      <h1
          style={{ fontFamily: "Roboto,Kanit", fontSize: "1rem" }}
          className="pt-2"
        >
          Subject Assesments
        </h1>
        <SubjectCarousale />
        
      </div>
    </Page>
  );
}
