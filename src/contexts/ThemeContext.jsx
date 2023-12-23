import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "retro";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "retro" ? "dark" : "retro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
