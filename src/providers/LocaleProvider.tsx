"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { type Locale, defaultLocale } from "@/shared/locales";

// Import messages directly for client-side loading
import enMessages from "../../messages/en.json";
import ptMessages from "../../messages/pt.json";

// Simple locale context for language switching only
interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
});

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

interface LocaleProviderProps {
  children: ReactNode;
  initialLocale: Locale; // Received from server wrapper
}

export const LocaleProvider = ({ children, initialLocale }: LocaleProviderProps) => {
  // Initialize with server-provided locale (no hydration mismatch!)
  const [locale] = useState<Locale>(initialLocale);

  // Handle locale change with cookie persistence and page reload
  const setLocale = (newLocale: Locale) => {
    // Set cookie with 1 year expiration
    document.cookie = `preferred-locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    // Reload page to let server wrapper pick up new locale
    window.location.reload();
  };

  // Get messages for current locale
  const messages = locale === "en" ? enMessages : ptMessages;

  const contextValue: LocaleContextType = {
    locale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      <NextIntlClientProvider 
        locale={locale} 
        messages={messages}
        timeZone="UTC"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
};
