export const themeInitScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : { variant: 'default', colorMode: 'light' };
      document.documentElement.setAttribute('data-theme-variant', savedTheme.variant);
      document.documentElement.setAttribute('data-theme-color-mode', savedTheme.colorMode);
      // Add dark class if needed
      if (savedTheme.colorMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.style.visibility = 'visible';
    } catch (e) {
      console.error('Error applying theme:', e);
    }
  })()
`;
