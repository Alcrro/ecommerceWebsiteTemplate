import React from "react";
import { nwFont } from "@/utils/fonts/LocalFonts";
import ProductCard from "@/components/product/card/ProductCard";
import ViewAllButton from "@/components/buttons/viewAll/ViewAllButton";
import CategoryTitle from "../categoryFormat/categoryTitle/CategoryTitle";
import CategoryModal from "../CategoryModal";
import { getProductsData } from "@/api/fetchProductData";
import { getRatingProductsData } from "@/api/fetchRatingProductData";
const BestSellingProducts = async () => {
  const products = await getProductsData("soldTimes", "1000");

  return (
    <CategoryModal toggle="best_selling_view_more">
      {/* <div className={styles.best_selling_products}> */}
      <CategoryTitle description="Best selling Products" font={nwFont} />
      <ProductCard products={products} />
      {products.length > 0 && <ViewAllButton toggle="best_selling_view_more" />}
      {/* </div> */}
    </CategoryModal>
  );
};

export default BestSellingProducts;
