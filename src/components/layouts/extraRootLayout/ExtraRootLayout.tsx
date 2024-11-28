import { AddToProvider } from "@/contexts/AddToProvider";
import DarkThemeProvider from "@/contexts/DarkThemeProvider";
import SearchProductsProvider from "@/contexts/SearchProductsProvider";
import { ToggleProvider } from "@/contexts/ToggleProvider";
import React, { ReactNode } from "react";

const ExtraRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DarkThemeProvider>
      <SearchProductsProvider>
        <AddToProvider>
          <ToggleProvider>{children}</ToggleProvider>
        </AddToProvider>
      </SearchProductsProvider>
    </DarkThemeProvider>
  );
};

export default ExtraRootLayout;
