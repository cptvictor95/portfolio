import { getRequestConfig } from "next-intl/server";

// Define our supported locales - single source of truth
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

// Main next-intl configuration
export default getRequestConfig(async () => {
  // For now, we'll use a static locale
  // Later we can integrate with cookies/headers for SSR
  const locale = defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
