"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import styles from "../components/darkTheme/darkTheme.module.scss";

const DarkThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // or return a loading component

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className={theme === "dark" ? styles.dark_icon : styles.light_icon}
    ></button>
  );
};

export default DarkThemeToggle;
