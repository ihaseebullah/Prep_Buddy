import React, { useContext } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Icon, useThemeProps } from "@mui/material";
import ai from "../assets/img/ai.gif";

import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { MainContext } from "../Context/Context";
export default function IconButton(props) {
  const { setSideBarState } = useContext(MainContext);
  return (
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
        <button>
          <img style={{ maxHeight: "2.3rem" }} srcSet={ai} alt="AI" />
        </button>
      )}
    </div>
  );
}
