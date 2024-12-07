import React from "react";
import TitleSection from "../../sectionTitle/TitleSection";
import CategoryTitle from "../categoryFormat/categoryTitle/CategoryTitle";
import { nwFont } from "@/utils/fonts/LocalFonts";
import Declarations from "./declarations/Declarations";

const CustomersDeclaration = () => {
  return (
    <div>
      <CategoryTitle description="OUR HAPPY CUSTOMERS" font={nwFont} />
      <Declarations />
    </div>
  );
};

export default CustomersDeclaration;
