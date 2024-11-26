"use client";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
import React, { ReactNode } from "react";
import styles from "./searchBar.module.scss";
import Search from "../navbarMenu/search/Search";

const SearchBarModal = ({ children }: { children: ReactNode }) => {
  const { isToggled, toggleVisibility } = UseToggleProvider();
  return (
    <>
      <div
        className={`${styles.search_bar} ${
          isToggled.search_bar ? styles.show : styles.hide
        }`}
      >
        <Search iconEnabled={true} />
        {children}
      </div>
    </>
  );
};

export default SearchBarModal;
