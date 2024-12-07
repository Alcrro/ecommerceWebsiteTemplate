"use client";
import React from "react";

type DefaultButtonProps = {
  label: string;
  onClick: () => void;
  styles: { [key: string]: string }; // Type for CSS module styles;
  className: string | string[]; // Allow single string or an array of strings
};

const DefaultButton: React.FC<DefaultButtonProps> = ({
  label,
  onClick,
  styles,
  className,
}) => {
  // Join className strings and map them to CSS module styles
  const combinedClassName = Array.isArray(className)
    ? className.map((name) => styles[name]).join(" ")
    : styles[className];

  return (
    <button onClick={onClick} className={combinedClassName}>
      {label}
    </button>
  );
};

export default DefaultButton;
