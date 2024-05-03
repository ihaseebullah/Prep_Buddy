import { createContext,useState } from "react";
import Sidebar from "../components/Sidebar";

export const MainContext = createContext({});

export default function MainContextProvider(props) {
  const [sideBarState, setSideBarState] = useState(false);
  return (
    <MainContext.Provider value={{ sideBarState, setSideBarState }}>
      {props.children}
    </MainContext.Provider>
  );
}
