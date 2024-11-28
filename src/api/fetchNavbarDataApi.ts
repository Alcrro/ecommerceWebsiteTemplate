import { INavbarData, navbarData } from "@/consts/navbarData";

export const fetchNavbarData = async (): Promise<INavbarData> => {
  return navbarData;
};
