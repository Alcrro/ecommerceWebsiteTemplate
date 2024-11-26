import { IProductData } from "@/types/ProductsData";

// Define state type
export interface AppState {
  favorites: IProductData[];
  cart: IProductData[];
}
export type AppAction =
  | { type: "TOGGLE_FAVORITE"; payload: IProductData }
  | { type: "TOGGLE_CART"; payload: IProductData };

export const initialState: AppState = {
  favorites: [],
  cart: [],
};
export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      const updatedFavorites = exists
        ? state.favorites.filter((item) => item.id !== action.payload.id) // Remove if exists
        : [...state.favorites, action.payload]; // Add if not exists
      return { ...state, favorites: updatedFavorites };
    }
    case "TOGGLE_CART": {
      const exists = state.cart.some((item) => item.id === action.payload.id);
      const updatedCart = exists
        ? state.cart.filter((item) => item.id !== action.payload.id) // Remove if exists
        : [...state.cart, action.payload]; // Add if not exists
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};
