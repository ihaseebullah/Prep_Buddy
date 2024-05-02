import { createContext,useState } from "react";

export const MainContext = createContext({});

export default function MainContextProvider(props) {
  const [sideBarState, setSideBarState] = useState(false);
  return (
    <MainContext.Provider value={{ sideBarState, setSideBarState }}>
      {props.children}
    </MainContext.Provider>
  );
}
