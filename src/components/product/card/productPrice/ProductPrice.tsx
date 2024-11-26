import React from "react";
import styles from "./productPrice.module.scss";
import { IProductData } from "@/types/ProductsData";
const ProductPrice = ({ product }: { product: IProductData }) => {
  return <div className={styles.product_price}>$ {product.price}</div>;
};

export default ProductPrice;
