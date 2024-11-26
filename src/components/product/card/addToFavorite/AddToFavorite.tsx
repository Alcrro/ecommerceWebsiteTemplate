"use client";
import React, { useEffect, useState } from "react";
import styles from "./addToFavorite.module.scss";
import { IProductData } from "@/types/ProductsData";
import { useAddToContext } from "@/contexts/AddToProvider";

const AddToFavorite = ({ product }: { product: IProductData }) => {
  const { state, dispatch } = useAddToContext();

  const isFavorited = state.favorites[product.id]?.id === product.id;


  return (
    <div
      className={`${styles.add_to_favorite} ${
        state.favorites[product.id]?.id === product.id ? styles.added : ""
      }`}
      onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: product })}
    ></div>
  );
};

export default AddToFavorite;
