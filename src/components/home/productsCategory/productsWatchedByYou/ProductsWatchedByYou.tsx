import React from "react";

import ProductCard from "@/components/product/card/ProductCard";
import { nwFont } from "@/utils/fonts/LocalFonts";
import ViewAllButton from "@/components/buttons/viewAll/ViewAllButton";
import CategoryTitle from "../categoryFormat/categoryTitle/CategoryTitle";
import CategoryModal from "../CategoryModal";
import { getProductsData } from "@/api/fetchProductData";

const ProductsWatchedByYou = async () => {
  const products = await getProductsData("productWatchedByYou", "10");
  return (
    <CategoryModal toggle="product_watched_by_you_view_more">
      <CategoryTitle description="Top Products watched by You" font={nwFont} />
      <ProductCard products={products} />
      {products.length > 0 && (
        <ViewAllButton toggle="product_watched_by_you_view_more" />
      )}
    </CategoryModal>
  );
};

export default ProductsWatchedByYou;
