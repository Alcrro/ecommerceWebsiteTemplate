import { getProductsData } from "@/consts/productsData";
import React from "react";
import styles from "./newArrivals.module.scss";
import ProductCard from "@/components/product/card/ProductCard";

const NewArrivals = async () => {
  const products = await getProductsData("new-arrivals");
  console.log(products);

  return (
    <div className={styles.new_arrivals}>
      <div className={`${styles.new_arrivals_title} text-center`}>
        new arrivals
      </div>

      <ProductCard products={products} />
    </div>
  );
};

export default NewArrivals;
