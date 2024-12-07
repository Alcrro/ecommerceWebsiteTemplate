import React from "react";
import styles from "./cart.module.scss";
import Link from "next/link";
import CartNotification from "./CartNotification";
const Cart = () => {
  return (
    <Link href={"/cart"} className={styles.cart_menu_icon}>
      <CartNotification />
    </Link>
  );
};

export default Cart;
