import { fetchNavbarData } from "@/api/fetchNavbarData";
import { INavbarData } from "@/consts/navbarData";

export const getNavbarMenuInfo = async (): Promise<INavbarData> => {
  const data = await fetchNavbarData();

  return { logo: data.logo, menu: data.menu };
};
