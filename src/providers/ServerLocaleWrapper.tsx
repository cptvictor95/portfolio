import { cookies } from "next/headers";
import { getSafeLocale, type Locale } from "@/shared/locales";
import { LocaleProvider } from "./LocaleProvider";
import type { ReactNode } from "react";

interface ServerLocaleWrapperProps {
  children: ReactNode;
}

// Server Component that reads cookies and passes locale to client
export async function ServerLocaleWrapper({ children }: ServerLocaleWrapperProps) {
  // Read locale from cookies on the server
  let initialLocale: Locale;
  
  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('preferred-locale')?.value;
    initialLocale = getSafeLocale(cookieLocale);
  } catch {
    // Fallback to default if cookies can't be read
    initialLocale = getSafeLocale();
  }

  // Pass the server-determined locale to the client provider
  return (
    <LocaleProvider initialLocale={initialLocale}>
      {children}
    </LocaleProvider>
  );
}