import { IProductData } from "@/types/ProductsData";
import { generateDate } from "@/utils/generateDate";

const productsData: IProductData[] = [
  {
    id: 0,
    productName: "IPhone",
    model: "15",
    brand: "apple",
    category: "mobile",
    createdAt: generateDate(),
    price: "1000",
    mostSearched: "100",
    image: "apple-blue-iphone-15.png",
    rating: "2.2",
  },
  {
    id: 1,
    productName: "samsung",
    model: "qled",
    brand: "samsung",
    category: "tv",
    createdAt: generateDate(),
    mostSearched: "1000",
    price: "800",
    image: "smart-tv-4k.png",
    rating: "1.5",
  },
  {
    id: 2,
    productName: "huawei",
    model: "15",
    brand: "huawei",
    category: "tablet",
    createdAt: generateDate(),
    mostSearched: "2000",
    price: "500",
    image: "matepad.png",
    rating: "4.3",
  },
  {
    id: 3,
    productName: "galaxy",
    model: "s24 pro",
    brand: "samsung",
    category: "mobile",
    createdAt: generateDate(),
    mostSearched: "4000",
    price: "800",
    image: "apple-blue-iphone-15.png",
    rating: "3.8",
  },
  {
    id: 4,
    productName: "macbook",
    model: "m3",
    brand: "apple",
    category: "laptop",
    createdAt: generateDate(),
    mostSearched: "100",
    price: "2000",
    image: "apple-blue-iphone-15.png",
    rating: "3.5",
  },
];

export async function getProductsData(
  params: string
): Promise<IProductData[] | []> {
  console.log(params);

  if (!params) {
    return [];
  } else if (params === "all") {
    return productsData;
  } else if (params === "new-arrivals") {
    let today = new Date();
    let latestDay = new Date();
    latestDay.setDate(today.getDate() - Number(30));

    let filters = productsData.filter((item) => item.createdAt > latestDay);

    return filters;
  } else {
    const excludeFields = ["id"];
    let regex = new RegExp(params, "i");
    let filters = productsData.filter(
      (item) =>
        Object.entries(item)
          .filter(([key]) => !excludeFields.includes(key)) // Exclude specified fields
          .some(([, value]) => regex.test(String(value))) // Apply the regex on remaining fields
    );
    return filters;
  }
}
