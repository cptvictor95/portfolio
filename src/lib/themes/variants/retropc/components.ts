export const retropcStyles = {
  // Base styles for retropc theme
  '[data-theme-variant="retropc"]': {
    // Theme-specific styles only
  },

  // Button styles
  '[data-theme-variant="retropc"] .btn, [data-theme-variant="retropc"] .button, [data-theme-variant="retropc"] button[class*="button"], [data-theme-variant="retropc"] [class*="Button"]':
    {
      "@apply bg-[#DBDBDB] border-[2px] border-black relative px-4 py-2 dark:bg-[#424242]":
        {},
      "@apply before:absolute before:content-[''] before:inset-0": {},
      "@apply before:border-t-[1px] before:border-l-[1px] before:border-white dark:before:border-[#626262]":
        {},
      "@apply before:border-r-[1px] before:border-b-[1px] before:border-[#888888] dark:before:border-[#2B2B2B]":
        {},
      "@apply after:absolute after:content-[''] after:top-0 after:left-0": {},
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

  // Dropdown menu items
  '[data-theme-variant="retropc"] [role="menuitem"]': {
    "@apply relative cursor-default select-none px-2 py-1.5": {},
    "@apply hover:bg-[#000080] hover:text-white focus:bg-[#000080] focus:text-white":
      {},
    "@apply outline-none transition-colors": {},
  },

  // Card styles
  '[data-theme-variant="retropc"] .card, [data-theme-variant="retropc"] [class*="card"], [data-theme-variant="retropc"] [class*="Card"]':
    {
      "@apply bg-[#DBDBDB] border-[1px] border-black relative": {},
      "@apply before:absolute before:content-[''] before:inset-0": {},
      "@apply before:border-t-[1px] before:border-l-[1px] before:border-white":
        {},
      "@apply before:border-r-[1px] before:border-b-[1px] before:border-[#888888]":
        {},
      "@apply after:absolute after:content-[''] after:top-0 after:left-0": {},
      "@apply after:w-full after:h-full after:-z-10": {},
      "@apply after:shadow-[4px_4px_0_0_#000]": {},
    },
};
