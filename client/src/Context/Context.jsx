import { createContext, useState } from "react";
import Sidebar from "../components/Sidebar";

export const MainContext = createContext({});

export default function MainContextProvider(props) {
  const [sideBarState, setSideBarState] = useState(false);
  const [value, setValue] = useState("Home");
  const [showResult, setShowResult] = useState(false);
  const [bottomBar, setbottomBar] = useState(false);
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
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
