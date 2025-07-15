import React, { useState, useEffect } from "react";
import ThemeContext from "./themeContext";
import { TChildProps, ThemeMode } from "@/utils/types";


const ThemeContextProvider: React.FC<TChildProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  const toggle = () => {
    const newTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;