"use client";
// AddToCartButton.tsx
import React, { useState, CSSProperties } from "react";
import DefaultButton from "../DefaultButton";

const AddToCartButton: React.FC = () => {
  const [isAdded, setIsAdded] = useState(false);

  // Specific styles for "Add to Cart"
  const addToCartStyle: CSSProperties = {
    border: "2px solid #f39c12", // Highlight border
    backgroundColor: isAdded ? "#f39c12" : "#fff",
    color: isAdded ? "#fff" : "#f39c12",
  };

  return (
    <DefaultButton
      label={isAdded ? "Remove from Cart" : "Add to Cart"}
      isActive={isAdded}
      onClick={() => setIsAdded(!isAdded)}
      style={addToCartStyle} // Apply additional styles
    />
  );
};

export default AddToCartButton;
