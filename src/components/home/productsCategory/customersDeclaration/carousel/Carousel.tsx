"use client";
import ProductRating from "@/components/product/card/productRating/ProductRating";
import { IProductData } from "@/types/ProductsData.types";
import { IUserDeclaration } from "@/types/usersDeclarations.types";
import { IRatingProduct } from "@/consts/product/ratingProductData";
import React, { use, useEffect, useState } from "react";
import styles from "./carousel.module.scss";

const Carousel = ({
  products,
  declarations,
}: {
  products: IProductData[];
  declarations: { rating: IRatingProduct[]; user: IUserDeclaration[] }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth <= 480) {
        setVisibleItems(1); // Show 1 item for small screens
      } else if (window.innerWidth <= 768) {
        setVisibleItems(2); // Show 2 items for medium screens
      } else {
        setVisibleItems(3); // Default to 3 items
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < declarations[0].user.length - visibleItems ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : declarations[0].user.length - visibleItems
    );
  };

  const { rating, user } = declarations[0];

  return (
    <div className={styles.customers_declaration_container}>
      <div
        className={styles.carousel_track}
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
        }}
      >
        {declarations[0].user.map((declaration) => {
          const matchingProduct = rating.find(
            (prod) => prod.productId === declaration.productId
          );
          console.log(matchingProduct);

          if (matchingProduct) {
            return (
              <div
                key={declaration.id}
                className={styles.customer_declaration_container}
              >
                <ProductRating
                  rating={Number(
                    matchingProduct.productId === 
                    
                  )} // Use matching product rating
                />
                <div className={styles.customer_declaration_name}>
                  {declaration.userName}
                </div>
                <div className={styles.customer_declaration_comment}>
                  {declaration.comment}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className={styles.carousel_controls}>
        <button
          aria-label="Previous"
          className={`${styles.carousel_button} prev ${
            currentIndex === 0 ? styles.disabled : ""
          }`}
          disabled={currentIndex === 0}
          onClick={handlePrev}
        >
          ◀
        </button>
        <button
          aria-label="Next"
          className={`${styles.carousel_button} next`}
          disabled={declarations[0].user.length - 1 === currentIndex}
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
