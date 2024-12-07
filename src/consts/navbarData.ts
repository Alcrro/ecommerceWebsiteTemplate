import { INavbarLogo } from "@/types/NavbarLogo.types";
import { INavbarDataMenu } from "@/types/NavbarMenu.types";
import { incrementalNumber } from "@/utils/incrementNumber";

export interface INavbarData {
  logo: INavbarLogo;
  menu: INavbarDataMenu[];
}

const incrementNumber = incrementalNumber();
export const navbarData: INavbarData = {
  logo: {
    id: 0,
    label: "ALCRRO",
  },
  menu: [
    {
      id: incrementNumber(),
      label: "shop",
      link: "shop",
    },
    {
      id: incrementNumber(),
      label: "on sale",
      link: "on-sale",
    },
    {
      id: incrementNumber(),
      label: "new arrivals",
      link: "new-arrivals",
    },
    {
      id: incrementNumber(),
      label: "brands",
      link: "brands",
    },
  ],
};
