import plugin from "tailwindcss/plugin";
import { retropcStyles } from "./variants/retropc/components";
import { typewriterStyles } from "./variants/typewriter/components";
import { modernStyles } from "./variants/modern/components";

// Combine all theme styles
const componentStyles = {
  ...modernStyles,
  ...retropcStyles,
  ...typewriterStyles,
};

export const themesPlugin = plugin(
  function ({ addComponents }) {
    addComponents({
      ...componentStyles,
    });
  },
  {
    theme: {
      extend: {
        fontFamily: {
          "ibm-plex-sans": ["var(--font-ibm-plex-sans)"],
          "dm-mono": ["var(--font-dm-mono)"],
          "dm-sans": ["var(--font-dm-sans)"],
        },
        // Theme-specific color palettes
        colors: {
          retropc: {
            bg: "#DBDBDB",
            bgDark: "#424242",
            bgActiveDark: "#2B2B2B",
            menuHover: "#000080", // Classic Windows 98 menu highlight color
            border: "#000000",
            innerBorderLight: "#FFFFFF",
            innerBorderDark: "#888888",
          },
          typewriter: {
            bg: "#FFFFFF",
            bgDark: "#18181B", // zinc-900
            text: "#000000",
            textDark: "#FFFFFF",
          },
        },
      },
    },
  }
);
