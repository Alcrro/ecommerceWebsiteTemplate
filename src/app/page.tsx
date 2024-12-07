import BestSellingProducts from "@/components/home/productsCategory/bestSellingProducts/BestSellingProducts";
import Brands from "@/components/home/brands/Brands";
import NewArrivals from "@/components/home/productsCategory/newArrivals/NewArrivals";
import ProductsWatchedByYou from "@/components/home/productsCategory/productsWatchedByYou/ProductsWatchedByYou";
import TitleSection from "@/components/home/sectionTitle/TitleSection";

import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import CustomersDeclaration from "@/components/home/productsCategory/customersDeclaration/CustomersDeclaration";
import NewsLetter from "@/components/newsLetter/NewsLetter";

export default function Home() {
  return (
    <DashboardLayout>
      <TitleSection />
      <Brands />
      <NewArrivals />
      <BestSellingProducts />
      <ProductsWatchedByYou />
      <CustomersDeclaration />
      <NewsLetter />
    </DashboardLayout>
  );
}
