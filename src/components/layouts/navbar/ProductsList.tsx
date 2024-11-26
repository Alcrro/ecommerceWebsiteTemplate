"use client";
import { useSearchFilteredProducts } from "@/contexts/SearchProductsProvider";
import React from "react";
import styles from "./productsList.module.scss";

const ProductsList = () => {
  const { query, searchFilteredProducts } = useSearchFilteredProducts();

  return (
    <>
      {query.length < 1 &&
      searchFilteredProducts.length < 1 ? null : query.length > 0 &&
        searchFilteredProducts.length < 1 ? (
        <div className={styles.products_not_found}>Products not found!</div>
      ) : (
        <div className={styles.products_list}>
          <ul>
            {searchFilteredProducts.map((product) => (
              <li key={product.id}>
                {product.category} {product.productName} {product.model}{" "}
                {product.brand}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProductsList;
