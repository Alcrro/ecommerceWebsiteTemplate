import React from "react";
import ProductBadge from "./badge/ProductBadge";
import ProductToolbox from "./toolbox/ProductToolbox";
import ProductImage from "./productImage/ProductImage";
import ProductDescription from "./productDescription/ProductDescription";
import ProductRating from "./productRating/ProductRating";
import ProductPrice from "./productPrice/ProductPrice";
import { IProductData } from "@/types/ProductsData";
import styles from "./card.module.scss";
import NotificationCompare from "./addToCompare/notificationCompare/NotificationCompare";
const ProductCard = ({ products }: { products: IProductData[] }) => {
  return (
    <>
      <NotificationCompare />
      <div className={`${styles.cards}`}>
        {products.length < 1 ? (
          <div className={styles.no_products}>No Products</div>
        ) : (
          products.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.card_wrapper}>
                <ProductBadge product={item} />
                <ProductToolbox product={item} />
                <div className={styles.card_info}>
                  <ProductImage product={item} />

                  <ProductDescription product={item} />
                  <ProductRating product={item} />
                </div>
                <div className={styles.card_content}>
                  <ProductPrice product={item} />
                  <div className={styles.button_container}>
                    <button>
                      <i className={styles.cart_icon}></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductCard;
