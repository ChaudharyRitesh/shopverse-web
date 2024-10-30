import { useState, useEffect } from "react";
import useTheme from "../hooks/usetTheme";
import "../App.css";

const HomePage = () => {
  const { setTheme, theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger the theme transition effect when the theme changes
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 500); // Animation duration
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const handleThemeChange = () => {
    setIsTransitioning(true);
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`theme-container ${theme}`}>
      <h1>Home Page</h1>
      <p>Current Theme: {theme}</p>

      <button onClick={handleThemeChange}>Change Theme</button>

      {/* Theme transition overlay */}
      {isTransitioning && <div className="theme-transition active" />}
    </div>
  );
};

export default HomePage;
