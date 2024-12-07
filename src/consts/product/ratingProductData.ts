import { incrementalNumber } from "@/utils/incrementNumber";

export interface IRatingProduct {
  id: number;
  productId: number;
  average: number;
  count: 200;
  reviews: {
    id: string;
    userId: number;
    rating: number;
    comment: "za best product";
  }[];
}
const incrementCounter = incrementalNumber();

export const ratingProduct: IRatingProduct[] = [
  {
    id: incrementCounter(),
    productId: 0,
    average: 0,
    count: 200,
    reviews: [
      {
        id: `review_${incrementCounter()}`,
        userId: 0,
        rating: 1,
        comment: "za best product",
      },
      {
        id: `review_${incrementCounter()}`,
        userId: 1,
        rating: 4,
        comment: "za best product",
      },
    ],
  },
  {
    id: incrementCounter(),
    productId: 1,
    average: 0,
    count: 200,
    reviews: [
      {
        id: `review_${incrementCounter()}`,
        userId: 2,
        rating: 3.3,
        comment: "za best product",
      },
      {
        id: `review_${incrementCounter()}`,
        userId: 3,
        rating: 2.5,
        comment: "za best product",
      },
    ],
  },
  {
    id: incrementCounter(),
    productId: 2,
    average: 0,
    count: 200,
    reviews: [
      {
        id: `review_${incrementCounter()}`,
        userId: 4,
        rating: 1.3,
        comment: "za best product",
      },
      {
        id: `review_${incrementCounter()}`,
        userId: 5,
        rating: 2.5,
        comment: "za best product",
      },
    ],
  },
  {
    id: incrementCounter(),
    productId: 3,
    average: 0,
    count: 200,
    reviews: [
      {
        id: `review_${incrementCounter()}`,
        userId: 6,
        rating: 2.3,
        comment: "za best product",
      },
      {
        id: `review_${incrementCounter()}`,
        userId: 7,
        rating: 3.5,
        comment: "za best product",
      },
    ],
  },
  {
    id: incrementCounter(),
    productId: 4,
    average: 0,
    count: 200,
    reviews: [
      {
        id: `review_${incrementCounter()}`,
        userId: 2,
        rating: 4.1,
        comment: "za best product",
      },
      {
        id: `review_${incrementCounter()}`,
        userId: 3,
        rating: 3.5,
        comment: "za best product",
      },
    ],
  },
]; // Function to calculate the average rating once and assign to each product
function calculateAverage(product: IRatingProduct) {
  const totalRatings = product.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return totalRatings / (product.reviews.length || 1); // Prevent division by zero
}

// Calculate average for each product
ratingProduct.forEach((product) => {
  product.average = calculateAverage(product);
});
