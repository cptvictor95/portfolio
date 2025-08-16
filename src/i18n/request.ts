import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { getSafeLocale, defaultLocale } from "@/shared/locales";

// Main next-intl configuration - reads locale from cookies
export default getRequestConfig(async () => {
  // Read locale directly from cookies in server component context
  let locale = defaultLocale;
  
  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('preferred-locale')?.value;
    locale = getSafeLocale(cookieLocale);
  } catch {
    // Fallback to default if cookies can't be read
    console.log('Using default locale due to cookie access limitation');
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'UTC', // Global default timezone to prevent hydration mismatches
  };
});
