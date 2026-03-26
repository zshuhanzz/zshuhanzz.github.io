"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "../styles/Nav.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
