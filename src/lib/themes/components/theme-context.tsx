"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ColorMode, ThemeConfig, ThemeVariant } from "../types";

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
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem("theme", JSON.stringify(theme));

    // Update data attributes and classes
    const root = document.documentElement;
    root.setAttribute("data-theme-variant", theme.variant);
    root.setAttribute("data-theme-color-mode", theme.colorMode);

    // Toggle dark mode class
    if (theme.colorMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
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
