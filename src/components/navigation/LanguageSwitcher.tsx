"use client";

import { locales, type Locale } from "@/i18n/request";
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
      className="flex gap-1 bg-black/20 backdrop-blur-sm rounded-full p-1"
      role="radiogroup"
      aria-label="Language selection"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === locale
              ? "bg-white text-black shadow-sm"
              : "text-white/70 hover:text-white hover:bg-white/10"
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
