import Link from "next/link";
import React from "react";
import styles from "./starRating.module.scss";
import { IProductData } from "@/types/ProductsData";
const ProductRating = ({ product }: { product: IProductData }) => {
  function calculateStarWidth(
    totalStars: number,
    starsToCalculate: number
  ): number {
    // Calculate the percentage width for the given stars
    const percentage = (starsToCalculate / totalStars) * 100;
    return percentage;
  }
  return (
    <div className={styles.card_rating}>
      <Link href={""}>
        <div className={styles.star_rating}>
          <div
            className={styles.star_rating_inner}
            style={{
              width: `${calculateStarWidth(5, Number(product.rating))}%`,
            }}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default ProductRating;
