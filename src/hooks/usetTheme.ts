import { useContext } from "react";
import { ThemeContext } from "../context/providers/ThemeProvider";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
