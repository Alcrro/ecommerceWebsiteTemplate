import { footerData } from "@/consts/footerData";
import { IFooterData } from "@/types/FooterMenu.types";

export const fetchFooterData = async (): Promise<IFooterData[]> => {
  return footerData;
};
