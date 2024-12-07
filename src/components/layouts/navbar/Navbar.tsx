import React from "react";
import styles from "./navbar.module.scss";
import SearchBar from "@/components/searchBar/SearchBar";
import Cart from "@/components/navbarMenu/cart/Cart";
import Login from "@/components/navbarMenu/login/Login";
import Search from "@/components/navbarMenu/search/Search";
import GroupMenu from "./groupMenu/GroupMenu";
import DarkThemeToggle from "@/app/DarkThemeToggle";
import NavbarMenu from "@/components/navbarMenu/navbarMenu/NavbarMenu";
import FavoriteNotification from "@/components/navbarMenu/favorite/FavoriteNotification";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <GroupMenu />
      <NavbarMenu />
      <SearchBar />
      <div className={`${styles.navbar_aux}`}>
        <Search iconEnabled={false} />
        {/* <SearchBarModal /> */}
        <DarkThemeToggle />
        <FavoriteNotification />
        <Cart />
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
