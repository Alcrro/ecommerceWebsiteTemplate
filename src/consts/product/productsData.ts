import { IProductData } from "@/types/ProductsData.types";
import { generateDate } from "@/utils/generateDate";
import { incrementalNumber } from "@/utils/incrementNumber";

const incNumber = incrementalNumber();

export const productsData: IProductData[] = [
  {
    id: incNumber(),
    productName: "IPhone",
    model: "12",
    brand: "apple",
    category: "mobile",
    createdAt: generateDate(),
    price: "1000",
    mostSearched: "100",
    thumbnail: "apple-blue-iphone-15.png",
    images: [""],

    soldTimes: "3425",
    productWatchedByYou: "8",
    isNewArrival: true,
    isOnSale: false,
    salePrice: "",
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "samsung",
    model: "qled",
    brand: "samsung",
    category: "tv",
    createdAt: generateDate(),
    mostSearched: "1000",
    price: "800",
    thumbnail: "smart-tv-4k.png",

    soldTimes: "1014",
    productWatchedByYou: "6",
    isNewArrival: true,
    isOnSale: true,
    salePrice: "699",
    images: [],
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "huawei",
    model: "15",
    brand: "huawei",
    category: "tablet",
    createdAt: generateDate(),
    mostSearched: "2000",
    price: "500",
    thumbnail: "matepad.png",
    images: [""],

    soldTimes: "3324",
    productWatchedByYou: "12",
    isNewArrival: false,
    isOnSale: false,
    salePrice: "",
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "galaxy",
    model: "s24 pro",
    brand: "samsung",
    category: "mobile",
    createdAt: generateDate(),
    mostSearched: "4000",
    price: "800",
    thumbnail: "apple-blue-iphone-15.png",

    soldTimes: "2123",
    productWatchedByYou: "14",
    isNewArrival: true,
    isOnSale: false,
    salePrice: "",
    images: [],
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "macbook",
    model: "m3",
    brand: "apple",
    category: "laptop",
    createdAt: generateDate(),
    mostSearched: "100",
    price: "2000",
    thumbnail: "apple-blue-iphone-15.png",

    soldTimes: "2000",
    productWatchedByYou: "7",
    isNewArrival: false,
    isOnSale: false,
    salePrice: "",
    images: [],
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "macbook",
    model: "m3",
    brand: "apple",
    category: "laptop",
    createdAt: generateDate(),
    mostSearched: "100",
    price: "2000",
    thumbnail: "apple-blue-iphone-15.png",

    soldTimes: "947",
    productWatchedByYou: "4",
    isNewArrival: true,
    isOnSale: false,
    salePrice: "",
    images: [],
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "macbook",
    model: "m2",
    brand: "apple",
    category: "laptop",
    createdAt: generateDate(),
    mostSearched: "100",
    price: "2000",
    thumbnail: "apple-blue-iphone-15.png",

    soldTimes: "555",
    productWatchedByYou: "15",
    isNewArrival: true,
    isOnSale: false,
    salePrice: "",
    images: [],
    stock: {
      availability: true,
      quantity: 50,
    },
  },
  {
    id: incNumber(),
    productName: "macbook",
    model: "m1",
    brand: "apple",
    category: "laptop",
    createdAt: generateDate(),
    mostSearched: "100",
    price: "2000",
    thumbnail: "apple-blue-iphone-15.png",

    soldTimes: "154",
    productWatchedByYou: "18",
    isNewArrival: false,
    isOnSale: false,
    salePrice: "",
    images: [],
    stock: {
      availability: true,
      quantity: 50,
    },
  },
];
