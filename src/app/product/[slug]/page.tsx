import { getProductsData } from "@/api/fetchProductData";
import { getRatingProductsData } from "@/api/fetchRatingProductData";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";

import { RatingProductFilter } from "@/types/RatingProductFilter.types";
import { extractTextAfterLastDash } from "@/utils/extractId";
import React from "react";

const page = async (params: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params.params;
  const id = extractTextAfterLastDash(slug);
  const product = await getProductsData("id", id);
  const ratingProduct = await getRatingProductsData(
    "productId",
    Number(id) as unknown as RatingProductFilter
  );

  return <DashboardLayout>{slug}</DashboardLayout>;
};

export default page;
