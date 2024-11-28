import React from "react";
import styles from "./cart.module.scss";
import Link from "next/link";
const Cart = () => {
  return <Link href={"/cart"} className={styles.cart_menu_icon}></Link>;
};

export default Cart;
