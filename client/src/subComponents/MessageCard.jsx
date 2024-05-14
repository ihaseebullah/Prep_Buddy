import React from "react";
import { Avatar } from "@mui/material";
import { Box, useMediaQuery, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const MessageCard = ({ role, message, type }) => {
  const isHuman = role === "human";
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const width = isNonMobile ? "100%" : "90%";
  const isLoading = type === "loading";
  return (
    <>
      <Box display="flex" flexDirection="row"  margin="0.6rem 1rem" marginRight='1rem' width= "95%">
        {isHuman ? (
          <Avatar alt="human" src="/images/humanavatar.png" />
        ) : (
          <Avatar alt="human" src="/images/robotAvatar.jpg" />
        )}

        <Box
          minWidth={width}
          minHeight="3rem"
          sx={{
            backgroundColor: "#e5e2e2de",
            marginLeft: "0.6rem",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            background: "rgba(248, 255, 253, 0.34)",
            
          }}
        >
          {isLoading ? (
            <Typography
              sx={{
                fontWeight: "light",
                marginLeft: "1rem",
              }}
            >
              {message}
            </Typography>
          ) : (
            <Typography
              sx={{
                fontWeight: "light",
                marginLeft: "1rem",
                marginTop: "1rem ",
                marginBottom: "1rem",
              }}
            >
              <ReactMarkdown>{message}</ReactMarkdown>
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MessageCard;
