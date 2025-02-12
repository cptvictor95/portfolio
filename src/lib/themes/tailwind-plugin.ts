const retropcStyles = {
  // Add base font style for retropc theme
  '[data-theme-variant="retropc"]': {
    "@apply font-['IBM_Plex_Sans']": {},
  },

  // Button styles (existing code)
  '[data-theme-variant="retropc"] .btn, [data-theme-variant="retropc"] .button, [data-theme-variant="retropc"] button[class*="button"], [data-theme-variant="retropc"] [class*="Button"]':
    {
      "@apply bg-[#DBDBDB] border-[2px] border-black relative px-4 py-2 dark:bg-[#424242]":
        {},
      // ... rest of existing button styles ...
    },
  // ... rest of existing retropc styles ...
};
