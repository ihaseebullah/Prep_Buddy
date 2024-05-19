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
import { Avatar, Grid, Skeleton, Stack, Typography } from "@mui/material";
import bell from "../assets/img/bell.gif";
import avatar from "../assets/icons/avatar-svgrepo-com.svg";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const { userData } = React.useContext(AuthContext);
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
            className="shadow-lg "
            style={{ height: "5rem", width: "5rem" }}
          />
          <h3 className="text-center">
            {" "}
            {userData.fullName
              ? userData.fullName
              : "User ain't have a full name"}
          </h3>
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
          width: "100vw",
        }}
      >
        <div className="flex p-2 pb-0 justify-center">
          <Skeleton width={"6rem"} height={"0.5rem"} />
        </div>
        <h3
          className="text-center"
          style={{ fontFamily: "Roboto", fontSize: "1.3rem" }}
        >
          <i class="fa-solid fa-bell" />
          &nbsp;Notifications
        </h3>
      </div>
      <List>
        <div className="pt-8 py-2 ">
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded my-1 "
            disablePadding
          >
            <ListItemButton>
              <p className="text-gray-500" style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>{" "}
          <ListItem
            key={Math.random()}
            className="bg-gray-100 rounded my-1 "
            disablePadding
          >
            <ListItemButton>
              <p className="text-gray-500" style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can.
              </p>
            </ListItemButton>
          </ListItem>{" "}
          <ListItem
            key={"8234789"}
            className="bg-gray-100 rounded my-1 "
            disablePadding
          >
            <ListItemButton>
              <p className="text-gray-500" style={{ fontFamily: "Nunito" }}>
                Hey user buy as much as possible because i wanna rob you with
                this app as much as i can. 😂
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

export function Saved() {
  const [savedData, setSavedData] = React.useState([]);
  const NavigateTo = useNavigate();
  React.useEffect(() => {
    axios.get("/analytics").then((res) => {
      setSavedData(res.data.Analytics?.saved);
    });
  }, []);
  const styles = {
    background: "rgba(231, 231, 231, 0.65)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    WebkitBackdropFilter: "blur(7px)", // For Webkit browsers
    backdropFilter: "blur(7px)", // Standard backdrop-filter property
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };
  const containerStyle = {
    background: "rgba(53, 83, 191, 0.6)",
    WebkitBackdropFilter: "blur(5.5px)", // For Webkit browsers
    backdropFilter: "blur(10px)", // Standard backdrop-filter property
    padding: "0.3rem",
    color: "white",
  };
  const {
    saved: state,
    setSaved: setState,
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
          width: "100vw",
        }}
      >
        <div className="flex p-2 pb-0 justify-center">
          <Skeleton width={"6rem"} height={"0.5rem"} />
        </div>
        <h3
          className="text-center text-gray-600"
          style={{ fontFamily: "Roboto", fontSize: "1.3rem" }}
        >
          <i class="fa-regular fa-bookmark text-gray-600" /> &nbsp;Saved Results
        </h3>
      </div>
      <List>
        <div className="pt-10 py-2 ">
          {savedData.map((item, index) => {
            return (
              <ListItem
                key={Math.random()}
                className="bg-gray-100  rounded my-1 "
                disablePadding
              >
                <ListItemButton>
                  <Grid container className="flex items-center">
                    <Grid item xs={8}>
                      <p className="font-bold">{item.quizTitle}</p>
                      <p
                        className="text-gray-700"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {item.description}
                      </p>
                    </Grid>
                    <Grid style={{ textAlign: "right" }} item xs={4}>
                      <button
                        onClick={() => {
                          NavigateTo(`/saved/results/${item._id}`);
                        }}
                        className="rounded-lg text-gray-700"
                        style={containerStyle}
                      >
                        Go To Quiz
                      </button>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
            );
          })}
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
