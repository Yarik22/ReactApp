import React, { createContext } from "react";
import useToggle from "../../../hooks/UseToggle";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkTheme, toggleTheme] = useToggle(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  const theme = {
    darkTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
