"use client";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React, { ReactNode } from "react";

const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
