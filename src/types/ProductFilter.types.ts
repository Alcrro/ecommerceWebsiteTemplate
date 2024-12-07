import { productsData } from "@/consts/product/productsData";


type Product = (typeof productsData)[number];

export type ProductFilter = keyof Product | "all" | "shop" | "new-arrivals";
