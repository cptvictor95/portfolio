export const modernStyles = {
  // Base styles for modern theme
  '[data-theme-variant="default"]': {
    // Theme-specific styles only
  },

  '[data-theme-variant="default"] .btn, [data-theme-variant="default"] .button, [data-theme-variant="default"] button[class*="button"], [data-theme-variant="default"] [class*="Button"]':
    {
      "@apply rounded-lg": {}, // This applies 0.5rem border radius
    },
};
