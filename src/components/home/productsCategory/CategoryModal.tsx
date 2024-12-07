"use client";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
import React, { ReactNode } from "react";
import styles from "./categoryModal.module.scss";
const CategoryModal = ({
  children,
  toggle,
}: {
  children: ReactNode;
  toggle: string;
}) => {
  const { isToggled } = UseToggleProvider();

  return (
    <div
      className={`${styles.category_modal} ${styles[toggle]} ${
        isToggled[toggle] ? styles.expanded : ""
      }`}
    >
      {children}
    </div>
  );
};
export default CategoryModal;
