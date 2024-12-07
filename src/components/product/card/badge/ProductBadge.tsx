import React from "react";
import styles from "./badges.module.scss";

import { IProductData } from "@/types/ProductsData.types";
const Badge = ({ product }: { product: IProductData }) => {
  return <div className={styles.product_badge}></div>;
};

export default Badge;
