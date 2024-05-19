import { createContext, useState } from "react";
import Sidebar from "../components/Sidebar";

export const MainContext = createContext({});

export default function MainContextProvider(props) {
  const [sideBarState, setSideBarState] = useState(false);
  const [value, setValue] = useState("Home");
  const [showResult, setShowResult] = useState(false);
  const [bottomBar, setbottomBar] = useState(false);
  const [saved, setSaved] = useState(false);
  const [headers, setHeaders] = useState({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  });
  return (
    <MainContext.Provider
      value={{
        sideBarState,
        setSideBarState,
        bottomBar,
        setbottomBar,
        value,
        setValue,
        showResult,
        setShowResult,
        headers,
        saved,
        setSaved,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
