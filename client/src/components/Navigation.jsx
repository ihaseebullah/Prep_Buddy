import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MainContext } from "../Context/Context";

import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
export default function Navigation() {
  const { bottomBar, setbottomBar, value, setValue } =
    React.useContext(MainContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigateTo = useNavigate();
  return (
    <BottomNavigation
      value={value}
      style={{ backgroundColor: "#F9F9FA" }}
      className="bottom-navigation shadow-lg rounded-[12rem]"
      onChange={handleChange}
    >
      <BottomNavigationAction
        onClick={() => navigateTo("/")}
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Recents
          </Typography>
        }
        value="Home"
        icon={
          <i
            class="fa-solid fa-house"
            style={{
              fontSize: "1.5rem",
              color: `${value === "Home" ? "red" : "gray"}`,
            }}
          ></i>
        }
      />
      <BottomNavigationAction
        onClick={() => navigateTo("/")}
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Liked
          </Typography>
        }
        value="Liked"
        icon={
          <i
            className={`fa-${value === "Liked" ? "solid" : "regular"} fa-heart`}
            style={{
              fontSize: "1.5rem",
              color: `${value === "Liked" ? "red" : "gray"}`,
            }}
          ></i>
        }
      />
      <BottomNavigationAction
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Notifications
          </Typography>
        }
        onClick={() => setbottomBar(true)}
        value="Notifications"
        icon={
          <i
            class={`fa-regular fa-bell`}
            style={{
              fontSize: "1.5rem",
              color: `${value === "Notifications" ? "red" : "gray"}`,
            }}
          ></i>
        }
      />
      <BottomNavigationAction
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Analytics
          </Typography>
        }
        value="Analytics"
        sx={{
          "&.Mui-selected": {
            // styles for the selected item
            color: "#F9F9FA", // change to your desired color
          },
        }}
        icon={
          <i
            class="fa-solid fa-chart-simple"
            style={{
              fontSize: "1.5rem",
              color: `${value === "Analytics" ? "red" : "gray"}`,
            }}
          ></i>
        }
      />
    </BottomNavigation>
  );
}
