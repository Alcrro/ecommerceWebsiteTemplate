import Brands from "@/components/home/brands/Brands";
import NewArrivals from "@/components/home/newArrivals/NewArrivals";
import TitleSection from "@/components/home/setctionTitle/TitleSection";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { getProductsData } from "@/consts/productsData";

export default async function Home() {
  const products = await getProductsData("all");

  return (
    <DashboardLayout>
      <TitleSection />
      <Brands />
      <NewArrivals />
    </DashboardLayout>
  );
}
