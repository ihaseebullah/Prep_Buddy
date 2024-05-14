import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedin] = useState(false);
  return (
    <AuthContext.Provider
      value={{ userData, setUserData, isLoggedIn, setIsLoggedin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
