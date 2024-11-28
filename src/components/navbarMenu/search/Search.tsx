"use client";
import React from "react";
import styles from "./search.module.scss";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
const Search = ({ iconEnabled }: { iconEnabled: boolean }) => {
  const { isToggled, toggleVisibility } = UseToggleProvider();

  return (
    <>
      {iconEnabled ? (
        <div className={`${styles.visible_icon}`}></div>
      ) : (
        <div
          className={`${styles.search_bar_icon}`}
          onClick={() => toggleVisibility("search_bar")}
        ></div>
      )}
    </>
  );
};

export default Search;
