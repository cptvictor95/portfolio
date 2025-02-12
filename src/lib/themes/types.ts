export type ThemeVariant = "default" | "windows98" | "typewriter";
export type ColorMode = "light" | "dark";

export interface ThemeConfig {
  variant: ThemeVariant;
  colorMode: ColorMode;
}
