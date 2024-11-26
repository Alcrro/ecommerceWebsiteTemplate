import { fetchNavbarData } from "@/api/fetchNavbarDataApi";

import Link from "next/link";
import React from "react";

const NavbarList = async () => {
  const { menu } = await fetchNavbarData();

  return (
    <>
      {menu.map((menu) => (
        <li key={menu.id}>
          <Link href={`/${menu.link}`}>{menu.label}</Link>
        </li>
      ))}
    </>
  );
};

export default NavbarList;
