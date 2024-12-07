import { ratingProduct } from "@/consts/product/ratingProductData";

type RatingProduct = (typeof ratingProduct)[number];

export type RatingProductFilter = keyof RatingProduct;
