"use client";
import React, { useState } from "react";
import styles from "./toggleMenu.module.scss";
import { UseToggleProvider } from "@/contexts/ToggleProvider";

const ToggleMenu = () => {
  const { isToggled, toggleVisibility } = UseToggleProvider();
  return (
    <div
      className={
        !isToggled.toggle_menu
          ? styles.toggle_menu_is_closed
          : styles.toggle_menu_is_opened
      }
      onClick={() => toggleVisibility("toggle_menu")}
    ></div>
  );
};

export default ToggleMenu;
