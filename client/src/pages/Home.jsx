import React, { useContext, useEffect } from "react";
import Page from "../components/Page";

import Banner from "../components/Banner";
import Pill from "../components/Pill";
import { Divider } from "@mui/material";
import SubjectCarousaleWrapper from "../components/SubjectCarousale";
import { CarouselTransition } from "../components/Qoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
// import SubjectCard from "../components/SubjectCards";

export default function Home() {
  const NavigateTo = useNavigate();
  const { isLoggedIn, setIsLoggedin, userData, setUserData } =
    useContext(AuthContext);
  const loginUser = async () => {
    try {
      const res = await axios.get("/");
    } catch (err) {
      if (err.response.status) {
        setIsLoggedin(false);
        setUserData({});
        NavigateTo("/login");
      }
    }
  };

  useEffect(() => {
    loginUser();
  }, []);
  return (
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
  );
}
