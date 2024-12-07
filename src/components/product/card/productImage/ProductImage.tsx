import React from "react";
import styles from "./productImage.module.scss";
import Image from "next/image";
import { IProductData } from "@/types/ProductsData.types";
import Link from "next/link";
import { generateLink } from "@/utils/generateLink";

const ProductImage = ({ product }: { product: IProductData }) => {
  return (
    <Link
      href={`/product/${generateLink(
        product.brand,
        product.category,
        product.model,
        String(product.id)
      )}`}
      className={styles.card_product_link}
    >
      <div className={styles.product_image_container}>
        <Image
          src={`/assets/images/products/${product.thumbnail}`}
          alt={product.productName}
          width={220}
          height={220}
          className={styles.image_icon}
        />
      </div>
    </Link>
  );
};

export default ProductImage;
