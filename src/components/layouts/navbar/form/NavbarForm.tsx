"use client";
import { getProductsData } from "@/api/fetchProductData";
import { useSearchFilteredProducts } from "@/contexts/SearchProductsProvider";
import { ProductFilter } from "@/types/ProductFilter.types";
import React, { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}
const NavbarForm = () => {
  const [debouncedQuery, setDebouncedQuery] = useState<string>(""); // Debounced query

  const { query, setQuery, searchFilteredProducts, setSearchFilteredProducts } =
    useSearchFilteredProducts();

  // Debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query); // Update the debounced query after 300ms
    }, 500);

    return () => {
      clearTimeout(handler); // Clear timeout if the user types before 300ms
    };
  }, [query]);

  // Fetch filtered products when the query changes
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsData(debouncedQuery as ProductFilter);
      setSearchFilteredProducts(products);
    };

    fetchProducts();
  }, [query, debouncedQuery]);
  return (
    <>
      <input
        type="search"
        placeholder="Search for products..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default NavbarForm;
