import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
// import SubjectCard from "../components/SubjectCards";

export default function Authenticator({ children }) {
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
  return <div>{children}</div>;
}
