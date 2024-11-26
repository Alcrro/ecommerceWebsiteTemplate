import Logo from "@/components/logo/Logo";
import ToggleMenu from "@/components/navbarMenu/toggleMenu/ToggleMenu";
import React from "react";
import styles from "./groupMenu.module.scss";
const GroupMenu = () => {
  return (
    <div className={styles.group_menu}>
      <ToggleMenu />
      <Logo />
    </div>
  );
};

export default GroupMenu;
