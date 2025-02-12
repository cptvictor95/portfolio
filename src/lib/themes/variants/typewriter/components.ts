export const typewriterStyles = {
  // Base styles for typewriter theme
  '[data-theme-variant="typewriter"]': {
    "@apply rounded-none": {}, // Just handle theme-specific styles
  },

  // Button styles
  '[data-theme-variant="typewriter"] .btn': {
    "@apply bg-white border-2 border-black relative px-4 py-2 text-black dark:bg-zinc-900 dark:border-white dark:text-white rounded-none":
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

  // Dropdown menu items
  '[data-theme-variant="typewriter"] [role="menuitem"]': {
    "@apply relative cursor-default select-none px-2 py-1.5 rounded-none": {},
    "@apply hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black":
      {},
    "@apply outline-none transition-colors": {},
  },

  // Card styles
  '[data-theme-variant="typewriter"] .card': {
    "@apply bg-white border-2 border-black p-6 dark:bg-zinc-900 dark:border-white rounded-none":
      {},
  },
};
