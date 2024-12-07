"use client";
import React from "react";
import DefaultButton from "../DefaultButton";
import viewAll from "./viewAll.module.scss";
import { UseToggleProvider } from "@/contexts/ToggleProvider";

const ViewAllButton = ({ toggle }: { toggle: string }) => {
  const { isToggled, toggleVisibility } = UseToggleProvider();

  return (
    <DefaultButton
      label={"View more"}
      onClick={() => toggleVisibility(toggle)}
      styles={viewAll}
      className={["viewAll", `${isToggled[toggle] ? "expended" : ""}`]}
    ></DefaultButton>
  );
};

export default ViewAllButton;
