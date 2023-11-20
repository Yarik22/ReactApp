import React, { createContext } from "react";
import useToggle from "../../../hooks/useToggle";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, toggleAuth] = useToggle(false);
  const auth = {
    isAuth,
    toggleAuth,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
