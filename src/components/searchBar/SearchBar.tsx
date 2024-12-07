import React from "react";
import NavbarForm from "../layouts/navbar/form/NavbarForm";
import ProductsList from "../layouts/navbar/ProductsList";
import SearchBarModal from "./SearchBarModal";

const SearchBar = () => {
  return (
    <SearchBarModal>
      <NavbarForm />
      <ProductsList />
    </SearchBarModal>
  );
};

export default SearchBar;
