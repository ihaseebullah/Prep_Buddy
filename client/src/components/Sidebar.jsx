import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MainContext } from "../Context/Context";
import { Avatar, Skeleton, Stack } from "@mui/material";
import bell from "../assets/img/bell.gif";
import avatar from "../assets/icons/avatar-svgrepo-com.svg";
export default function Sidebar() {
  const { sideBarState: state, setSideBarState: setState } =
    React.useContext(MainContext);
  const toggleDrawer = () => {
    setState(!state);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {/* <Skeleton variant="circular" height={120} width={120}/> */}
      <div className="flex p-2 justify-center">
        <Stack spacing={1}>
          <Avatar
            className="shadow-lg"
            style={{ height: "5rem", width: "5rem" }}
          />
          <h3 className="text-center">Haseeb Ullah</h3>
        </Stack>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}

export function NotificationsDrawer() {
  const styles = {
    background: "rgba(231, 231, 231, 0.65)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    WebkitBackdropFilter: "blur(7px)", // For Webkit browsers
    backdropFilter: "blur(7px)", // Standard backdrop-filter property
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };
  const {
    bottomBar: state,
    setbottomBar: setState,
    value,
    setValue,
  } = React.useContext(MainContext);
  const toggleDrawer = () => {
    setValue("");
    setState(!state);
  };
  const list = () => (
    <Box sx={{ height: 600 }} role="presentation" onKeyDown={toggleDrawer}>
      {/* <Skeleton variant="circular" height={120} width={120}/> */}
      <div
        className="shadow"
        style={{
          position: "fixed",
          zIndex: 1000,
          background: "rgba(231, 231, 231, 0.65)",
          WebkitBackdropFilter: "blur(9px)", // For Webkit browsers
          backdropFilter: "blur(9px)", // Standard backdrop-filter property
          width: "22.5rem",
          borderBottomLeftRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
        }}
      >
        <div className="flex p-2 pb-0 justify-center">
          <Skeleton width={"6rem"} height={"0.5rem"} />
        </div>
        <h3
          className="text-center"
          style={{ fontFamily: "Roboto", fontSize: "1.3rem" }}
        >
          Notifications
        </h3>
      </div>
      <List>
        <div className="p-2 pt-10 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Got a new scandal aren't you interested?
              </p>
            </ListItemButton>
          </ListItem>
        </div>
        <div className="p-2 py-1 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded shadow-md"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon disablePadding>{<img src={bell} />}</ListItemIcon>
              <p style={{ fontFamily: "Nunito" }}>
                Learn unlearn and relearn that is where you are better than any
                Ai that can ever be developed.
              </p>
            </ListItemButton>
          </ListItem>
        </div>
      </List>
    </Box>
  );
  return (
    <div>
      <SwipeableDrawer
        style={styles}
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
