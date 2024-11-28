"use client";
import { IProductData } from "@/types/ProductsData";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface iProductsProps {
  searchFilteredProducts: IProductData[];
  setSearchFilteredProducts: Dispatch<SetStateAction<IProductData[] | []>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const SearchProductContext = createContext<iProductsProps>({
  searchFilteredProducts: [],
  setSearchFilteredProducts: () => [],
  query: "",
  setQuery: () => undefined,
});

export const SearchProductsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchFilteredProducts, setSearchFilteredProducts] = useState<
    IProductData[] | []
  >([]);
  const [query, setQuery] = useState<string>("");
  return (
    <SearchProductContext.Provider
      value={{
        searchFilteredProducts,
        setSearchFilteredProducts,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchProductContext.Provider>
  );
};

export default SearchProductsProvider;

export const useSearchFilteredProducts = () => useContext(SearchProductContext);
