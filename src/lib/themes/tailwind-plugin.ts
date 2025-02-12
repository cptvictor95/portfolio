import plugin from "tailwindcss/plugin";

export const themesPlugin = plugin(
  function ({ addComponents, addBase }) {
    addComponents({
      // Windows 98 Theme Components
      '[data-theme-variant="windows98"] .btn, [data-theme-variant="windows98"] .button, [data-theme-variant="windows98"] button[class*="button"], [data-theme-variant="windows98"] [class*="Button"]':
        {
          "@apply bg-[#DBDBDB] border-[2px] border-black relative px-4 py-2 dark:bg-[#424242]":
            {},
          "@apply before:absolute before:content-[''] before:inset-0": {},
          "@apply before:border-t-[1px] before:border-l-[1px] before:border-white dark:before:border-[#626262]":
            {},
          "@apply before:border-r-[1px] before:border-b-[1px] before:border-[#888888] dark:before:border-[#2B2B2B]":
            {},
          "@apply after:absolute after:content-[''] after:top-0 after:left-0":
            {},
          "@apply after:w-full after:h-full after:-z-10": {},
          "@apply after:shadow-[4px_4px_0_0_#000000]": {},
          "@apply active:bg-[#CCCCCC] dark:active:bg-[#2B2B2B]": {},
          "@apply active:after:shadow-[2px_2px_0_0_#000000]": {},
          "@apply active:translate-x-[2px] active:translate-y-[2px]": {},
          "@apply transition-all duration-75": {},
          "& svg, & svg *": {
            "@apply h-4 w-4": {},
            "@apply !text-black dark:!text-white": {},
          },
        },

      // Dropdown menu items for Windows 98 theme
      '[data-theme-variant="windows98"] [role="menuitem"]': {
        "@apply relative cursor-default select-none px-2 py-1.5": {},
        "@apply hover:bg-[#000080] hover:text-white focus:bg-[#000080] focus:text-white":
          {},
        "@apply outline-none transition-colors": {},
      },

      // Card styles
      '[data-theme-variant="windows98"] .card, [data-theme-variant="windows98"] [class*="card"], [data-theme-variant="windows98"] [class*="Card"]':
        {
          "@apply bg-[#DBDBDB] border-[1px] border-black relative": {},
          "@apply before:absolute before:content-[''] before:inset-0": {},
          "@apply before:border-t-[1px] before:border-l-[1px] before:border-white":
            {},
          "@apply before:border-r-[1px] before:border-b-[1px] before:border-[#888888]":
            {},
          "@apply after:absolute after:content-[''] after:top-0 after:left-0":
            {},
          "@apply after:w-full after:h-full after:-z-10": {},
          "@apply after:shadow-[4px_4px_0_0_#000]": {},
        },

      // Typewriter Theme Components
      '[data-theme-variant="typewriter"] .btn': {
        "@apply bg-white border-2 border-black font-mono relative px-4 py-2 text-black dark:bg-zinc-900 dark:border-white dark:text-white":
          {},
        "@apply hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black":
          {},
        "@apply active:translate-y-[1px]": {},
        "@apply transition-colors duration-200": {},
        "& svg, & svg *": {
          "@apply h-4 w-4": {},
          "@apply text-current": {},
        },
      },

      '[data-theme-variant="typewriter"] [role="menuitem"]': {
        "@apply relative cursor-default select-none px-2 py-1.5 font-mono": {},
        "@apply hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black":
          {},
        "@apply outline-none transition-colors": {},
      },

      '[data-theme-variant="typewriter"] .card': {
        "@apply bg-white border-2 border-black font-mono p-6 dark:bg-zinc-900 dark:border-white":
          {},
      },
    });
  },
  {
    theme: {
      extend: {
        // Theme-specific color palettes
        colors: {
          windows98: {
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
