import React from "react";
import styles from "./addToCompare.module.scss";
import { IProductData } from "@/types/ProductsData";

const AddToCompare = ({ product }: { product: IProductData }) => {
  return <div className={styles.add_to_compare}></div>;
};

export default AddToCompare;
