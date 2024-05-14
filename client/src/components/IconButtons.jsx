import React, { useContext, useState, useRef, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  TextField,
  useMediaQuery,
  Divider,
} from "@mui/material";
import ai from "../assets/img/ai.gif";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";

import { MainContext } from "../Context/Context";
import MessageCard from "../subComponents/MessageCard";
import CloseIcon from "@mui/icons-material/Close";
import background from "../assets/img/background.jpg";

export default function IconButtons(props) {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const paperRef = useRef(null); // Ref for Paper component
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  const [chat, setChat] = useState([
    {
      user: "human",
      message: "Get a quote",
      response: "Believe you can and you're halfway there. - Talha Sher.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formSubmission = async (e) => {
    e.preventDefault();
    getData();
  };

  const getData = async () => {
    setIsLoading(true);

    const prompt = input;

    axios.post("/ai", { prompt, history }, { headers }).then((res) => {
      let ai = {
        user: "human",
        message: prompt,
        response: res.data,
      };
      setHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: prompt }] },
        { role: "model", parts: [{ text: res.data }] },
      ]);
      setChat((prev) => [...prev, ai]);
      setIsLoading(false);
    });
    setInput("");
  };

  /* INPUT CHANGE HANDLER */

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const skeleton = (
    <>
      <Box sx={{ width: isNonMobile ? "120vh" : "28vh" }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>
    </>
  );

  useEffect(() => {
    // Scroll to the bottom of the Paper component
    if (paperRef.current) {
      paperRef.current.scrollTop = paperRef.current.scrollHeight;
    }
  }, [chat, isLoading]);

  const { setSideBarState } = useContext(MainContext);
  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Paper
            sx={{
              height: "100vh",
              width: "100vw",
              background: "rgba(248, 255, 253, 0.14)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8.4px)",
              WebkitBackdropFilter: "blur(8.4px)",
              border: "1px solid rgba(248, 255, 253, 0.17)",
            }}
          >
            <Paper
              ref={paperRef}
              style={{
                overflow: "auto",
              }}
              sx={{
                width: "100vw",
                overflow: "auto",
                background: "rgba(248, 255, 253, 0.14)",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(8.4px)",
                WebkitBackdropFilter: "blur(8.4px)",
                border: "1px solid rgba(248, 255, 253, 0.17)",
              }}
            >
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Typography sx={{ margin: "1rem 1rem" }}>DDev</Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider />
              <List sx={{ height: "72vh" }}>
                {chat.map((singleChat, i) => (
                  <ListItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: 0,
                    }}
                    key={i}
                  >
                    {/* USER MESSAGE */}
                    <MessageCard
                      role={singleChat.user}
                      message={singleChat.message}
                    />

                    {/* AI RESPONSE */}

                    <MessageCard role="ai" message={singleChat.response} />
                  </ListItem>
                ))}
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: 0,
                  }}
                >
                  {isLoading && (
                    <MessageCard role="ai" message={skeleton} type="loading" />
                  )}
                </ListItem>
              </List>
            </Paper>
            <Paper
              sx={{
                width: "100vw",
                background: "rgba(248, 255, 253, 0.14)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(8.4px)",
                WebkitBackdropFilter: "blur(8.4px)",
                border: "1px solid rgba(248, 255, 253, 0.17)",
                marginTop: "0.6rem",
              }}
            >
              <form onSubmit={formSubmission}>
                <Box display="flex" sx={{ margin: "1rem 1rem" }}>
                  <TextField
                    sx={{
                      marginTop: "0.2rem",
                      width: "100%",
                      marginRight: "1rem",
                      color: "black",
                    }}
                    value={input}
                    onChange={inputChangeHandler}
                    placeholder="Your prompt..."
                    variant="standard"
                    multiline
                    maxRows="2"
                    required
                  />
                  <Button
                    variant="contained"
                    sx={{
                      // backgroundColor: "black",
                      backgroundColor: "rgba(0, 0, 0, 0.64)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(8.4px)",
                      WebkitBackdropFilter: "blur(8.4px)",
                      border: "1px solid rgba(248, 255, 253, 0.17)",
                    }}
                    type="submit"
                    disabled={isLoading}
                  >
                    send
                  </Button>
                </Box>
              </form>
            </Paper>
          </Paper>
        </Modal>
      )}
      <div
        style={{ backgroundColor: "#F9F9FA" }}
        className="rounded-full flex justify-center shadow-md items-center w-[3rem] h-[3rem]"
      >
        {props.icon === "bell" ? (
          <button
            onClick={() => {
              setSideBarState(true);
            }}
          >
            <i class="fa-solid fa-bars text-[1.4rem]"></i>
          </button>
        ) : (
          <button onClick={handleOpen}>
            <img style={{ maxHeight: "2.3rem" }} srcSet={ai} alt="AI" />
          </button>
        )}
      </div>
    </>
  );
}
