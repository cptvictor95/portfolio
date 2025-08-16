// Shared locale types and constants - safe for both server and client
export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Pure function to validate locale
export const isValidLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

// Pure function to get safe locale with fallback
export const getSafeLocale = (locale?: string): Locale => {
  if (!locale || !isValidLocale(locale)) {
    return defaultLocale;
  }
  return locale;
};