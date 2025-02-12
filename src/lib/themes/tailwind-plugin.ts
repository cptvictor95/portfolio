import plugin from "tailwindcss/plugin";

export const themesPlugin = plugin(
  function ({ addComponents, addBase }) {
    addComponents({
      // Windows 98 Theme Components
      '[data-theme-variant="windows98"] .btn, [data-theme-variant="windows98"] .button, [data-theme-variant="windows98"] button[class*="button"], [data-theme-variant="windows98"] [class*="Button"]':
        {
          "@apply bg-[#DBDBDB] border-[2px] border-black relative px-4 py-2":
            {},
          "@apply before:absolute before:content-[''] before:inset-0": {},
          "@apply before:border-t-[1px] before:border-l-[1px] before:border-white":
            {},
          "@apply before:border-r-[1px] before:border-b-[1px] before:border-[#888888]":
            {},
          "@apply after:absolute after:content-[''] after:top-0 after:left-0":
            {},
          "@apply after:w-full after:h-full after:-z-10": {},
          "@apply after:shadow-[4px_4px_0_0_#000000]": {},
          "@apply active:bg-[#CCCCCC]": {},
          "@apply active:after:shadow-[2px_2px_0_0_#000000]": {},
          "@apply active:translate-x-[2px] active:translate-y-[2px]": {},
          "@apply transition-all duration-75": {},
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
    });
  },
  {
    theme: {
      extend: {
        // Theme-specific color palettes
        colors: {
          windows98: {
            bg: "#DBDBDB",
            bgActive: "#CCCCCC",
            menuHover: "#000080", // Classic Windows 98 menu highlight color
            border: "#000000",
            innerBorderLight: "#FFFFFF",
            innerBorderDark: "#888888",
          },
        },
      },
    },
  }
);
