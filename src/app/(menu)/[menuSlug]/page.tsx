import React from "react";
import NotFound from "../not-found";
import { notFound } from "next/navigation";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";

const MenuSlug = async ({
  params,
}: {
  params: Promise<{ menuSlug: string }>;
}) => {
  const { menuSlug } = await params;
  // const menuData = await navbarData();

  // const existMenu = menuData.map((menu) => menu.link).includes(menuSlug);

  // if (!existMenu) {
  //   notFound();
  // }

  return <DashboardLayout>{menuSlug}</DashboardLayout>;
};

export default MenuSlug;
