export type ThemeVariant = "default" | "retropc" | "typewriter";
export type ColorMode = "light" | "dark";

export interface ThemeConfig {
  variant: ThemeVariant;
  colorMode: ColorMode;
}
