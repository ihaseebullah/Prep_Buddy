import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { MainContext } from "../Context/Context";
import { Link } from "react-router-dom";
export default function Navigation() {
  const [value, setValue] = React.useState("Home");
  const { setSideBarState, sideBarState } = React.useContext(MainContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <Link to={"/"}>
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<RoofingOutlinedIcon />}
        />
      </Link>
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteBorderOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Notifications"
        value="Notifications"
        icon={<NotificationsActiveOutlinedIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          setSideBarState(true);
        }}
        label="More"
        value="More"
        icon={<MenuOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
