"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ColorMode, ThemeConfig, ThemeVariant } from "./types";

interface ThemeContextType {
  theme: ThemeConfig;
  setColorMode: (mode: ColorMode) => void;
  setThemeVariant: (variant: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>({
    variant: "default",
    colorMode: "light",
  });

  useEffect(() => {
    // Apply theme classes to document
    const doc = document.documentElement;
    doc.classList.remove("light", "dark");
    doc.classList.add(theme.colorMode);
    doc.setAttribute("data-theme-variant", theme.variant);
  }, [theme]);

  const setColorMode = (mode: ColorMode) => {
    setTheme((prev) => ({ ...prev, colorMode: mode }));
  };

  const setThemeVariant = (variant: ThemeVariant) => {
    setTheme((prev) => ({ ...prev, variant }));
  };

  return (
    <ThemeContext.Provider value={{ theme, setColorMode, setThemeVariant }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
