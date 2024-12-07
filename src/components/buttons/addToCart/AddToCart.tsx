"use client";
// AddToCartButton.tsx
import React, { useState, CSSProperties } from "react";
import DefaultButton from "../DefaultButton";
import addToCart from "./addToCart.module.scss";
import { IProductData } from "@/types/ProductsData.types";
import { useAddToContext } from "@/contexts/AddToProvider";

const AddToCartButton = ({ product }: { product: IProductData }) => {
  const { state, dispatch } = useAddToContext();

  return (
    <div
      className={addToCart.button_container}
      onClick={() => dispatch({ type: "TOGGLE_CART", payload: product })}
    >
      <button>
        <i className={addToCart.cart_icon}></i>Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
