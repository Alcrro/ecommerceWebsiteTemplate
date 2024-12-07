"use client";
import React, { ReactNode } from "react";
import styles from "./newArrivalsContent.module.scss";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
const NewArrivalsContent = ({ children }: { children: ReactNode }) => {
  const { isToggled } = UseToggleProvider();

  return (
    <div
      className={`${styles.new_arrivals} ${
        isToggled.new_arrive_view_more ? styles.expanded : ""
      }`}
    >
      {children}
    </div>
  );
};

export default NewArrivalsContent;
