"use client";
import React from "react";
import styles from "./cartNotification.module.scss";
import { useAddToContext } from "@/contexts/AddToProvider";
const CartNotification = () => {
  const { state } = useAddToContext();

  if (state.cart.length < 1) {
    return null;
  }
  return (
    <div className={styles.cart_notification}>
      <div className="jewel">{state.cart.length}</div>
    </div>
  );
};

export default CartNotification;
