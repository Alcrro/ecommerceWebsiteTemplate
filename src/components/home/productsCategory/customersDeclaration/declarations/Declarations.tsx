import { getProductsData } from "@/api/fetchProductData";
import { getUsersDeclarationData } from "@/api/fetchUsersDeclarationData";
import React from "react";
import styles from "./customerDeclaration.module.scss";
import Carousel from "../carousel/Carousel";
import { getRatingProductsData } from "@/api/fetchRatingProductData";

const Declarations = async () => {
  const products = await getProductsData("all");
  // Fetch ratings for each product in parallel
  const productsWithRatings = await Promise.all(
    products.map(async (product) => {
      const rating = await getRatingProductsData(
        "productId",
        String(product.id)
      );
      const user = await getUsersDeclarationData();
      return {
        rating,
        user,
      };
    })
  );
  return (
    <div className={styles.customers_declaration}>
      <Carousel products={products} declarations={productsWithRatings} />
    </div>
  );
};

export default Declarations;
