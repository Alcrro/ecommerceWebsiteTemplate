import {
  IRatingProduct,
  ratingProduct,
} from "@/consts/product/ratingProductData";
import { RatingProductFilter } from "@/types/RatingProductFilter.types";

export const getRatingProductsData = async (
  param: RatingProductFilter,
  value?: string
): Promise<IRatingProduct[]> => {
  switch (param) {
    case "productId":
      return ratingProduct.filter(
        (filter) => filter.productId === Number(value)
      );
    default:
      return ratingProduct;
  }
};
