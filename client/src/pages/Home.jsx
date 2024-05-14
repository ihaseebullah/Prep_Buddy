import React, { useContext, useEffect } from "react";
import Page from "../components/Page";

import Banner from "../components/Banner";
import Pill from "../components/Pill";
import { Divider } from "@mui/material";
import SubjectCarousaleWrapper from "../components/SubjectCarousale";
import { CarouselTransition } from "../components/Qoutes";
import Authenticator from "../components/Authenticator";

export default function Home() {
  return (
    <Authenticator>
      <Page>
        <Banner />
        <Pill />
        <Divider />
        <SubjectCarousaleWrapper />
        <Divider className="py-1" />
        <h1
          style={{ fontFamily: "Roboto,Kanit,Nunito", fontSize: "1rem" }}
          className="py-2"
        >
          Great sayings:
        </h1>
        <div style={{ paddingBottom: "10rem" }}>
          <CarouselTransition />
        </div>
      </Page>
    </Authenticator>
  );
}
