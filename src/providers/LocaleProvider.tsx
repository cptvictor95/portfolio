"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import { type Locale, defaultLocale, getSafeLocale } from "@/i18n/request";

// Locale context type - clean interface
interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

// Create context with default values
const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
});

// Pure function - custom hook for accessing locale context
export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

// Pure function - get initial locale from browser/storage
export const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  // Check localStorage first
  const stored = localStorage.getItem("preferred-locale");
  if (stored && getSafeLocale(stored) === stored) {
    return stored as Locale;
  }

  // Fallback to browser language
  const browserLocale = navigator.language.split("-")[0];
  return getSafeLocale(browserLocale);
};

// Pure function to load messages for a locale
const loadMessages = async (locale: Locale) => {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to English
    const fallback = await import(`../../messages/en.json`);
    return fallback.default;
  }
};

// Provider component - integrates with next-intl
interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize locale on client-side
  useEffect(() => {
    const initLocale = getInitialLocale();
    setLocaleState(initLocale);
  }, []);

  // Load messages when locale changes
  useEffect(() => {
    const loadLocaleMessages = async () => {
      setIsLoading(true);
      try {
        const newMessages = await loadMessages(locale);
        setMessages(newMessages);
      } catch (error) {
        console.error("Error loading messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLocaleMessages();
  }, [locale]);

  // Pure function wrapper for locale setting
  const handleSetLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    // Persist to localStorage for better UX
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", newLocale);
    }
  };

  const contextValue: LocaleContextType = {
    locale,
    setLocale: handleSetLocale,
  };

  // Show loading state while messages are loading
  if (isLoading || !messages) {
    return (
      <div className="h-screen flex items-center justify-center bg-neutral-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={contextValue}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
};
