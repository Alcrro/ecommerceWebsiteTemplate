
import React from "react";

import NavbarList from "../navbarData/NavbarList";
import NavbarMenuModal from "./NavbarMenuModal";

const NavbarMenu = () => {
  return (
    <NavbarMenuModal>
      <ul>
        <NavbarList />
      </ul>
    </NavbarMenuModal>
  );
};

export default NavbarMenu;
