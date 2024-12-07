import React from "react";
import ProductBadge from "./badge/ProductBadge";
import ProductToolbox from "./toolbox/ProductToolbox";
import ProductImage from "./productImage/ProductImage";
import ProductDescription from "./productDescription/ProductDescription";
import ProductRating from "./productRating/ProductRating";
import ProductPrice from "./productPrice/ProductPrice";
import { IProductData } from "@/types/ProductsData.types";
import styles from "./card.module.scss";
import NotificationCompare from "./addToCompare/notificationCompare/NotificationCompare";
import CardModal from "./cardModal/CardModal";
import AddToCartButton from "@/components/buttons/addToCart/AddToCart";
import { getRatingProductsData } from "@/api/fetchRatingProductData";
import { IRatingProduct } from "@/consts/product/ratingProductData";

const ProductCard = async ({ products }: { products: IProductData[] }) => {
  // Fetch ratings for each product in parallel
  const productsWithRatings = await Promise.all(
    products.map(async (product) => {
      const rating = await getRatingProductsData(
        "productId",
        String(product.id)
      );
      return {
        ...product,
        rating,
      };
    })
  );

  return (
    <>
      {products.length < 1 && <NotificationCompare />}
      <CardModal>
        <div className={styles.cards}>
          {products.length < 1 ? (
            <div className={styles.no_products}>No Products</div>
          ) : (
            productsWithRatings.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.card_wrapper}>
                  <ProductBadge product={item} />
                  <ProductToolbox product={item} />
                  <div className={styles.card_info}>
                    <ProductImage product={item} />
                    <ProductDescription product={item} />

                    {item.rating[0]?.productId === item.id ? (
                      <ProductRating
                        product={item}
                        rating={item.rating[0].average}
                      />
                    ) : (
                      <ProductRating product={item} rating={0} />
                    )}
                  </div>
                  <div className={styles.card_content}>
                    <ProductPrice product={item} />
                    <AddToCartButton product={item} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardModal>
    </>
  );
};

export default ProductCard;
