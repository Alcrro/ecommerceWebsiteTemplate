export interface IProductData {
  id: number;
  productName: string;
  model: string;
  brand: string;
  category: string;
  createdAt: Date;
  isNewArrival: boolean;
  isOnSale: boolean;
  salePrice: string;
  mostSearched: string;
  price: string;
  images: string[];
  thumbnail: string;
  stock: { availability: true; quantity: 50 };
  soldTimes: string;
  productWatchedByYou: string;
}
