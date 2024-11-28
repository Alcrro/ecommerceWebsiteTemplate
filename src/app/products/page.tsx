import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <DashboardLayout>
      <div>
        <Link href={"/products/product-1"}>Product 1</Link>
      </div>
    </DashboardLayout>
  );
};

export default ProductsPage;
