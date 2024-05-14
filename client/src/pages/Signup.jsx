import { Avatar, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import SubjectHeader from "../components/SubjectHeader";
import Page from "../components/Page";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
export default function Signup() {
  const [signupForm, setSignupForm] = useState({ username: "" });
  const inputTag = useRef();
  const NavigateTo = useNavigate();
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
  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .post("/api/signup", signupForm, { headers })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully signed up user");
          NavigateTo("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error.response.data); // Log the error response
        if (error.response.status === 400) {
          if (Array.isArray(error.response.data.error)) {
            toast.error("Form Validation Failed");
            const errorMessages = error.response.data.error;
            toast.error(errorMessages);
          } else {
            const errorMessage = error.response.data.error;
            toast.error(errorMessage);
          }
        }
      });
  };

  return (
    <React.Fragment>
      <div className="p-3">
        <div className="flex justify-center bg-gray-200 mb-4 p-2 rounded-md shadow-md">
          <Typography
            fontFamily={"Roboto"}
            className="text-gray-700 uppercase font-bold"
            variant="h5"
          >
            SIGNUP NOW
          </Typography>
        </div>
        <form onSubmit={handleFormSubmission} action="">
          <div className="flex justify-center ">
            <div className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-full-name"
                  >
                    Full Name
                  </label>
                  <input
                    required={true}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-full-name"
                    type="text"
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, fullName: e.target.value })
                    }
                    placeholder="My Full Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-username"
                  >
                    Username
                  </label>
                  <input
                    className={`${
                      signupForm.username.split(" ").length > 1 &&
                      " border-red-500"
                    }appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="grid-username"
                    type="username"
                    ref={inputTag}
                    placeholder="i_name"
                    value={signupForm.value}
                    onChange={(e) => {
                      setSignupForm({
                        ...signupForm,
                        username: e.target.value,
                      });
                    }}
                    required={true}
                    pattern="^\S*$"
                  />
                  <p className="text-gray-600 text-xs ">
                    Get a catchy and unique username, you can only use non-blank
                    characters!
                  </p>{" "}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, password: e.target.value })
                    }
                    required={true}
                    placeholder="******************"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    required={true}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, email: e.target.value })
                    }
                    type="email"
                    placeholder="iusername@gmail.com"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-phone"
                    required={true}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, phone: e.target.value })
                    }
                    type="text"
                    placeholder="+923197489898"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-date"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-date"
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, dob: e.target.value })
                    }
                    required={true}
                    type="date"
                    placeholder={90210}
                  />
                  <p className="text-gray-600 text-xs italic">
                    We require DOB of users for security reasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            style={buttonStyle}
            className="bg-blue-500 w-full uppercase hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
