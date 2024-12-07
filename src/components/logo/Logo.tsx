import Link from "next/link";
import React from "react";
import styles from "./logo.module.scss";
import { fetchNavbarData } from "@/api/fetchNavbarData";

const Logo = async () => {
  const { logo } = await fetchNavbarData();
  return (
    <div className={`navbar-menu-container ${styles.logo}`}>
      <Link href={"/"}>{logo.label}</Link>
    </div>
  );
};

export default Logo;
