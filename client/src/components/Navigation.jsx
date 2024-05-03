import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { MainContext } from "../Context/Context";
import analytics from "../assets/img/analytics.png";
import liked from "../assets/img/liked.png";
import bell from "../assets/img/bell.png";
import home from "../assets/img/home.png";

import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
export default function Navigation() {
  const [value, setValue] = React.useState("Home");
  const { setSideBarState, sideBarState } = React.useContext(MainContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigateTo = useNavigate();
  return (
    <BottomNavigation
      value={value}
      style={{ backgroundColor: "#F9F9FA" }}
      className="shadow-lg rounded-[12rem]"
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
        sx={{ color: "yellow" }}
        icon={<img src={home} style={{maxHeight: "2.2rem",minHeight: "2.6rem" }} />}
      />
      <BottomNavigationAction
        onClick={() => navigateTo("/favourites")}
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Liked
          </Typography>
        }
        value="Liked"
        icon={<img src={liked} style={{ maxHeight: "2rem",minHeight: "2rem" }} />}
      />
      <BottomNavigationAction
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Notifications
          </Typography>
        }
        value="Notifications"
        icon={<img src={bell} style={{ maxHeight: "2rem",minHeight: "2.3rem" }} />}
      />
      <BottomNavigationAction
        onClick={() => {
          setSideBarState(true);
        }}
        label={
          <Typography variant="body2" style={{ color: "#D13E24" }}>
            Analytics
          </Typography>
        }
        value="Analytics"
        icon={<img src={analytics} style={{ maxHeight: "2rem",minHeight: "2rem" }} />}
      />
    </BottomNavigation>
  );
}
