import { IProductData } from "@/types/ProductsData.types";

// Define state type
export interface AppState {
  favorites: IProductData[];
  cart: IProductData[];
  compare: IProductData[];
}

export type AppAction =
  | { type: "TOGGLE_FAVORITE"; payload: IProductData }
  | { type: "TOGGLE_CART"; payload: IProductData }
  | { type: "TOGGLE_COMPARE"; payload: IProductData };

export const initialState: AppState = {
  favorites: [],
  cart: [],
  compare: [],
};

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const { payload } = action;

      const isAlreadyFavorited = state.favorites.some(
        (item) => item.id === payload.id
      );

      return {
        ...state,
        favorites: isAlreadyFavorited
          ? state.favorites.filter((item) => item.id !== payload.id) // Remove from favorites
          : [...state.favorites, payload], // Add to favorites
      };
    }

    case "TOGGLE_COMPARE": {
      const { payload } = action;
      const isAlreadyCompared = state.compare.some(
        (item) => item.id === payload.id
      );
      return {
        ...state,
        compare: isAlreadyCompared
          ? state.compare.filter((item) => item.id !== payload.id)
          : [...state.compare, payload],
      };
    }

    case "TOGGLE_CART": {
      const { payload } = action;
      const isAlreadyInCart = state.cart.some((item) => item.id === payload.id);
      return {
        ...state,
        cart: isAlreadyInCart
          ? state.cart.filter((item) => item.id !== payload.id)
          : [...state.cart, payload],
      };
    }

    default:
      return state;
  }
};
