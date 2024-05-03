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
import { Skeleton, Stack } from "@mui/material";
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
          <img src={avatar} alt="Avatar" height={120} width={120} />
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
