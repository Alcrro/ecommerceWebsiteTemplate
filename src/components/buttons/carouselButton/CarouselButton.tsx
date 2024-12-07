"use client";
import { IProductData } from "@/types/ProductsData.types";
import React, { useState } from "react";

const CarouselButton = ({ products }: { products: IProductData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };
  return <div></div>;
};

export default CarouselButton;
