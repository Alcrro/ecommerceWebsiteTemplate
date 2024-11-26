import React from "react";
import styles from "./productImage.module.scss";
import Image from "next/image";
import { IProductData } from "@/types/ProductsData";

const ProductImage = ({ product }: { product: IProductData }) => {
  return (
    <div className={styles.product_image_container}>
      <Image
        src={`/assets/images/products/${product.image}`}
        alt={product.productName}
        width={220}
        height={220}
        className={styles.image_icon}
      />
    </div>
  );
};

export default ProductImage;
