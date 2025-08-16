"use client";

import { locales, type Locale } from "@/shared/locales";
import { useLocale } from "@/providers/LocaleProvider";

// Pure function to get language display names
const getLanguageDisplayName = (locale: Locale): string => {
  const displayNames: Record<Locale, string> = {
    en: "EN",
    pt: "PT",
  };
  return displayNames[locale];
};

// Pure function to get full language names for accessibility
const getLanguageFullName = (locale: Locale): string => {
  const fullNames: Record<Locale, string> = {
    en: "English",
    pt: "Português",
  };
  return fullNames[locale];
};

// Language Switcher Component - pure UI component
export const LanguageSwitcher = () => {
  const { locale: currentLocale, setLocale } = useLocale();

  // Pure function to handle locale change
  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale !== currentLocale) {
      setLocale(newLocale);
    }
  };

  return (
    <div
      className="flex gap-2 w-fit"
      role="radiogroup"
      aria-label="Language selection"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-2 border-2 text-sm font-mono font-medium transition-all duration-200 uppercase tracking-wide ${
            currentLocale === locale
              ? "bg-transparent text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
              : "bg-transparent text-white border-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          }`}
          role="radio"
          aria-checked={currentLocale === locale}
          aria-label={`Switch to ${getLanguageFullName(locale)}`}
          title={getLanguageFullName(locale)}
        >
          {getLanguageDisplayName(locale)}
        </button>
      ))}
    </div>
  );
};
