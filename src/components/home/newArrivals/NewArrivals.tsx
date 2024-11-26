import { getProductsData } from "@/consts/productsData";

import React from "react";
import styles from "./newArrivals.module.scss";
import Link from "next/link";
import ProductRating from "@/components/product/card/productRating/ProductRating";
import ProductImage from "@/components/product/card/productImage/ProductImage";
import ProductBadge from "@/components/product/card/badge/ProductBadge";

import ProductToolbox from "@/components/product/card/toolbox/ProductToolbox";
import ProductDescription from "@/components/product/card/productDescription/ProductDescription";
import ProductPrice from "@/components/product/card/productPrice/ProductPrice";

const NewArrivals = async () => {
  const products = await getProductsData("30");

  return (
    <div className={styles.new_arrivals}>
      <div className={`${styles.new_arrivals_title} text-center`}>
        new arrivals
      </div>

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
                  <Link href={"/"} className={styles.card_product_link}>
                    <ProductImage product={item} />
                  </Link>
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
    </div>
  );
};

export default NewArrivals;
