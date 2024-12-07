import React from "react";
import ProductCard from "@/components/product/card/ProductCard";
import ViewAllButton from "@/components/buttons/viewAll/ViewAllButton";
import { nwFont } from "@/utils/fonts/LocalFonts";
import CategoryTitle from "../categoryFormat/categoryTitle/CategoryTitle";
import CategoryModal from "../CategoryModal";
import { getProductsData } from "@/api/fetchProductData";
import { getRatingProductsData } from "@/api/fetchRatingProductData";

const NewArrivals = async () => {
  const products = await getProductsData("new-arrivals", "4");

  return (
    <CategoryModal toggle="new_arrive_view_more">
      <CategoryTitle description="new arrivals" font={nwFont} />

      <ProductCard products={products} />
      {products.length > 0 && <ViewAllButton toggle="new_arrive_view_more" />}
    </CategoryModal>
  );
};

export default NewArrivals;
