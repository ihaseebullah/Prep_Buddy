import { Avatar, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/Loader";
import { useState } from "react";
export default function Login() {
  const NavigateTo = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingRequest, setLoadingRequest] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedin, userData, setUserData } =
    useContext(AuthContext);
  const buttonStyle = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(10px)", // Standard backdrop-filter property
    borderRadius: "1rem",
    overflow: "auto", // Change to auto to allow scrolling when needed
  };
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  const loginUser = async () => {
    try {
      setLoadingRequest(true);
      const res = await axios.get("/");

      if (res.status === 200) {
        setIsLoggedin(true);
        setUserData(res.data.user);
        navigate("/");
      } else {
        // Handle other status codes (e.g., 400, 500)
        if (res.data && res.data.message) {
          toast.error(res.data.message);
        } else {
          toast.error("An error occurred during login.");
        }
      }
    } catch (error) {
      // Handle network errors, etc.
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during login.");
      }
    } finally {
      setLoadingRequest(false);
    }
  };
  useEffect(() => {
    loginUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingRequest(true);

    try {
      const res = await axios.post(
        "/api/auth/login",
        {
          username,
          password,
        },
        { headers }
      );

      if (res.status === 200) {
        setIsLoggedin(true);
        setUserData(res.data.user);
        navigate("/");
      } else {
        // Handle other status codes (e.g., 400, 500)
        if (res.data && res.data.message) {
          toast.error(res.data.message);
        } else {
          toast.error("An error occurred during login.");
        }
      }
    } catch (error) {
      // Handle network errors, etc.
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during login.");
      }
      console.log(error);
    } finally {
      setLoadingRequest(false);
    }
  };

  return (
    <React.Fragment>
      {loadingRequest ? (
        <Loader title={"Logging in"} />
      ) : (
        <div className="p-3">
          <div className="flex justify-center mt-[5rem]   p-2  ">
            <Avatar className="shadow-md" sx={{ width: 90, height: 90 }} />
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Your username"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="******************"
                />
                <p className="text-gray-600 text-xs italic">
                  Click here to create account &nbsp;
                  <button
                    onClick={() => NavigateTo("/Signup")}
                    className="text-blue-600"
                    style={{ textDecoration: "underline" }}
                  >
                    click here
                  </button>
                </p>
              </div>
            </div>

            <button
              type="submit"
              style={buttonStyle}
              className="bg-blue-500 w-full uppercase hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}
