"use client";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
import React, { ReactNode } from "react";
import styles from "./cardModal.module.scss";
const CardModal = ({ children }: { children: ReactNode }) => {
  const { isToggled } = UseToggleProvider();

  return (
    <div
      className={`card_modal ${
        isToggled.new_arrive_view_more
          ? styles.extended
          : isToggled.best_selling_view_more
          ? styles.extended
          : isToggled.product_watched_by_you_view_more
          ? styles.extended
          : styles.notExtended
      }`}
    >
      {children}
    </div>
  );
};

export default CardModal;
