import React from "react";
import styles from "./toolbox.module.scss";
import AddToFavorite from "../addToFavorite/AddToFavorite";
import AddToCompare from "../addToCompare/AddToCompare";
import { INavbarData } from "@/consts/navbarData";
import { IProductData } from "@/types/ProductsData.types";
const ProductToolbox = ({ product }: { product: IProductData }) => {
  return (
    <div className={styles.product_toolbox}>
      <AddToFavorite product={product} />
      <AddToCompare product={product} />
    </div>
  );
};

export default ProductToolbox;
