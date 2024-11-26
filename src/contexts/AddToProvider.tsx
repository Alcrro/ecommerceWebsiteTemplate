"use client";
import {
  AppAction,
  AppState,
  initialState,
  reducer,
} from "@/hooks/reducers/addToReducer";
import { createContext, ReactNode, useContext, useReducer } from "react";

interface AddToContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AddToContext = createContext<AddToContextType | undefined>(undefined);

export const AddToProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AddToContext.Provider value={{ state, dispatch }}>
      {children}
    </AddToContext.Provider>
  );
};

export const useAddToContext = (): AddToContextType => {
  const context = useContext(AddToContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
