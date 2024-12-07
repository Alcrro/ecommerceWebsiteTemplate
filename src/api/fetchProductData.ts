import { productsData } from "@/consts/product/productsData";
import { ProductFilter } from "@/types/ProductFilter.types";
import { IProductData } from "@/types/ProductsData.types";

export async function getProductsData(
  params: ProductFilter,
  value?: string
): Promise<IProductData[] | []> {


  const limit = 4;

  if (!params) {
    return [];
  }

  switch (params) {
    case "all":
    case "shop":
      return productsData;
    case "id":
      if (!value) {
        console.error("Value is required for filtering by 'id'.");
        return [];
      }
      return productsData.filter((item) => item.id === Number(value));

    case "new-arrivals": {
      const today = new Date();
      const latestDay = new Date();
      latestDay.setDate(today.getDate() - 30);

      return productsData.filter((item) => item.isNewArrival).slice(0, limit);
    }

    case "soldTimes": {
      const numericValue = Number(value);
      if (isNaN(numericValue)) {
        console.error("Value must be a valid number for 'soldTimes'.");
        return [];
      }
      return productsData
        .filter((item) => Number(item.soldTimes) > numericValue)
        .slice(0, limit);
    }

    case "productWatchedByYou": {
      const numericValue = Number(value);
      if (isNaN(numericValue)) {
        console.error(
          "Value must be a valid number for 'productWatchedByYou'."
        );
        return [];
      }
      return productsData
        .filter((item) => Number(item.productWatchedByYou) > numericValue)
        .slice(0, limit);
    }

    default: {
      const excludeFields = ["id"];
      const regex = new RegExp(params, "i");

      return productsData.filter((item) =>
        Object.entries(item)
          .filter(([key]) => !excludeFields.includes(key))
          .some(([, pValue]) => regex.test(String(pValue)))
      );
    }
  }
}
