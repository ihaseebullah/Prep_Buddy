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
      await axios.get("/").then((res) => {
        setUserData(res.data.user);
        setIsLoggedin(true);
      });
    } catch (err) {
      if (err.response.status === 403 || 401) {
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
