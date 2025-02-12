import { ThemeVariant } from "./types";

interface ThemeOption {
  id: ThemeVariant;
  name: string;
  description: string;
  icon: string; // We'll use emoji for now, could be replaced with proper icons later
}

export const themeOptions: ThemeOption[] = [
  {
    id: "default",
    name: "Default",
    description: "The classic modern look",
    icon: "🎨",
  },
  {
    id: "windows98",
    name: "Windows 98",
    description: "Retro computing vibes",
    icon: "🖥️",
  },
];
