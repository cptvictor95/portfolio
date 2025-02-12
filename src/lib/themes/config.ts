import { ThemeVariant } from "./types";

interface ThemeOption {
  id: ThemeVariant;
  name: string;
  description: string;
  icon: string;
}

export const themeOptions: ThemeOption[] = [
  {
    id: "default",
    name: "Modern",
    description: "Clean and minimal design",
    icon: "✨",
  },
  {
    id: "retropc",
    name: "Retro PC",
    description: "90s operating system aesthetics",
    icon: "🖥️",
  },
  {
    id: "typewriter",
    name: "Typewriter",
    description: "Elegant monospace aesthetic",
    icon: "⌨️",
  },
];
