"use client";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
import React, { ReactNode } from "react";
import styles from "./navbarMenuModal.module.scss";
const NavbarMenuModal = ({ children }: { children: ReactNode }) => {
  const { isToggled } = UseToggleProvider();
  return (
    <div
      className={`${styles.navbar_menu_container} ${
        isToggled.toggle_menu ? styles.show : styles.hide
      }`}
    >
      {children}
    </div>
  );
};

export default NavbarMenuModal;
