export type ThemeVariant = "default" | "windows98";
export type ColorMode = "light" | "dark";

export interface ThemeConfig {
  variant: ThemeVariant;
  colorMode: ColorMode;
}
