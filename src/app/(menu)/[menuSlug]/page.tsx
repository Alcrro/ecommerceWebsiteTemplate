import React from "react";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import CategoryModal from "@/components/home/productsCategory/CategoryModal";
import CategoryTitle from "@/components/home/productsCategory/categoryFormat/categoryTitle/CategoryTitle";
import { nwFont } from "@/utils/fonts/LocalFonts";
import { getProductsData } from "@/api/fetchProductData";
import { ProductFilter } from "@/types/ProductFilter.types";
import ProductCard from "@/components/product/card/ProductCard";

const MenuSlug = async ({
  params,
}: {
  params: Promise<{ menuSlug: string }>;
}) => {
  const { menuSlug: slug } = await params; // Await the promise and destructure
  const title = slug.replace(/-/g, " ");
  const products = await getProductsData(slug as ProductFilter);

  return (
    <DashboardLayout>
      <CategoryModal toggle={slug}>
        <CategoryTitle description={`${title}`} font={nwFont} />
        <ProductCard products={products} />
      </CategoryModal>
    </DashboardLayout>
  );
};

export default MenuSlug;
