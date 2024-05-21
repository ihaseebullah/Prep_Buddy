import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MainContext } from "../Context/Context";

import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { NotificationsDrawer, Saved } from "./Sidebar";
export default function Navigation() {
  const styles = {
    background: "rgba(53, 83, 191, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(5.5px)", // Standard backdrop-filter property
    borderRadius: "5rem",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  const { bottomBar, setbottomBar, value, setValue, saved, setSaved } =
    React.useContext(MainContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigateTo = useNavigate();
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <Saved />
        <NotificationsDrawer />
        <BottomNavigation
          value={value}
          style={styles}
          className="bottom-navigation shadow-lg opacity-[.95]   rounded-[5rem]"
          onChange={handleChange}
        >
          <BottomNavigationAction
            onClick={() => navigateTo("/")}
            label={
              <Typography variant="body2" style={{ color: "#E1E1E1" }}>
                Recents
              </Typography>
            }
            value="Home"
            icon={
              <i
                className="fa-solid fa-house"
                style={{
                  fontSize: "1.5rem",
                  color: `${value === "Home" ? "#E1E1E1" : "#E1E1E1"}`,
                }}
              ></i>
            }
          />
          <BottomNavigationAction
            onClick={() => setSaved(true)}
            label={
              <Typography variant="body2" style={{ color: "#E1E1E1" }}>
                Liked
              </Typography>
            }
            value="Liked"
            icon={
              <i
                className={`fa-${
                  value === "bookmark" ? "solid" : "regular"
                } fa-bookmark`}
                style={{
                  fontSize: "1.5rem",
                  color: `${value === "bookmark" ? "#E1E1E1" : "#E1E1E1"}`,
                }}
              ></i>
            }
          />
          <BottomNavigationAction
            label={
              <Typography variant="body2" style={{ color: "#E1E1E1" }}>
                Notifications
              </Typography>
            }
            onClick={() => setbottomBar(true)}
            value="Notifications"
            icon={
              <i
                className={`fa-regular fa-bell`}
                style={{
                  fontSize: "1.5rem",
                  color: `${value === "Notifications" ? "#E1E1E1" : "#E1E1E1"}`,
                }}
              ></i>
            }
          />
          <BottomNavigationAction
            onClick={() => navigateTo("/Analytics")}
            label={
              <Typography variant="body2" style={{ color: "#E1E1E1" }}>
                Analytics
              </Typography>
            }
            value="Analytics"
            sx={{
              "&.Mui-selected": {
                // styles for the selected item
                color: "#E1E1E1", // change to your desired color
              },
            }}
            icon={
              <i
                className="fa-solid fa-chart-simple"
                style={{
                  fontSize: "1.5rem",
                  color: `${value === "Analytics" ? "#E1E1E1" : "#E1E1E1"}`,
                }}
              ></i>
            }
          />
        </BottomNavigation>
      </div>
    </React.Fragment>
  );
}
