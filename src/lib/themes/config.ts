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
    name: "Modern",
    description: "Clean and minimal design",
    icon: "✨",
  },
  {
    id: "windows98",
    name: "Retro PC",
    description: "90s operating system aesthetic",
    icon: "🖥️",
  },
  {
    id: "typewriter",
    name: "Typewriter",
    description: "Elegant monospace aesthetic",
    icon: "⌨️",
  },
];
