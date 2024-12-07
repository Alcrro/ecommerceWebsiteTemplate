"use client";
import React from "react";
import styles from "./addToFavorite.module.scss";
import { IProductData } from "@/types/ProductsData.types";
import { useAddToContext } from "@/contexts/AddToProvider";

const AddToFavorite = ({ product }: { product: IProductData }) => {
  const { state, dispatch } = useAddToContext();

  // Correctly check if the product is favorited
  const isFavorited = state.favorites.some((fav) => fav.id === product.id);

  return (
    <div
      className={`${styles.add_to_favorite} ${isFavorited ? styles.added : ""}`}
      onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: product })}
    ></div>
  );
};

export default AddToFavorite;
