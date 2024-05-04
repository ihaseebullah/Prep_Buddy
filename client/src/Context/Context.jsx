import { createContext,useState } from "react";
import Sidebar from "../components/Sidebar";

export const MainContext = createContext({});

export default function MainContextProvider(props) {
  const [sideBarState, setSideBarState] = useState(false);
  const [value, setValue] = useState("Home");
  const [bottomBar, setbottomBar] = useState(false);
  return (
    <MainContext.Provider value={{ sideBarState, setSideBarState,bottomBar, setbottomBar,value, setValue }}>
      {props.children}
    </MainContext.Provider>
  );
}
