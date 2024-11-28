import React from "react";
import NotFound from "../not-found";
import { notFound } from "next/navigation";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { getProductsData } from "@/consts/productsData";
import NewArrivals from "@/components/home/newArrivals/NewArrivals";

const MenuSlug = async ({
  params,
}: {
  params: Promise<{ menuSlug: string }>;
}) => {
  const { menuSlug } = await params;
  const products = await getProductsData(menuSlug);

  return (
    <DashboardLayout>
      <NewArrivals />
    </DashboardLayout>
  );
};

export default MenuSlug;
