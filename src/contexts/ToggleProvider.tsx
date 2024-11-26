"use client";
import { createContext, ReactNode, useContext, useState } from "react";
interface IToggleContext {
  [key: string]: boolean;
}

interface ToggleContextType {
  isToggled: IToggleContext;
  toggleVisibility: (id: string) => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState<IToggleContext>({});

  const toggleVisibility = (id: string) => {
    setIsToggled((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <ToggleContext.Provider value={{ isToggled, toggleVisibility }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const UseToggleProvider = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("Toggle must be used within a Visiblilty PRovider");
  }
  return context;
};
