"use client";
import React from "react";
import styles from "./addToCompare.module.scss";
import { IProductData } from "@/types/ProductsData.types";
import { useAddToContext } from "@/contexts/AddToProvider";
import { usePathname } from "next/navigation";

const AddToCompare = ({ product }: { product: IProductData }) => {
  const { state, dispatch } = useAddToContext();
  const pathname = usePathname();

  // Correctly check if the product is favorited
  const isFavorited = state.compare.some((fav) => fav.id === product.id);

  // Check if pathname is the home page
  if (pathname === "/") {
    return null; // Return null if on the home page
  }

  return (
    <div
      className={`${styles.add_to_compare} ${
        isFavorited ? styles.compared : ""
      }`}
      onClick={() => dispatch({ type: "TOGGLE_COMPARE", payload: product })}
    ></div>
  );
};

export default AddToCompare;
