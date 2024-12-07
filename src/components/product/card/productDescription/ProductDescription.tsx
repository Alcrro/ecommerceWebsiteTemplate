import { IProductData } from "@/types/ProductsData.types";
import React from "react";
import styles from "./productDescription.module.scss";
const ProductDescription = ({ product }: { product: IProductData }) => {
  return (
    <div className={styles.description_container}>
      {product.category} {product.brand} {product.productName} {product.model}
    </div>
  );
};

export default ProductDescription;
