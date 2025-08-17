"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { getNavItems } from "@/constants/sections";
import { locales, type Locale } from "@/shared/locales";
import { useLocale } from "@/providers/LocaleProvider";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

// Language helper functions
const getLanguageDisplayName = (locale: Locale): string => {
  const displayNames: Record<Locale, string> = {
    en: "EN",
    pt: "PT",
  };
  return displayNames[locale];
};

const getLanguageFullName = (locale: Locale): string => {
  const fullNames: Record<Locale, string> = {
    en: "English",
    pt: "Português",
  };
  return fullNames[locale];
};

// Simplified navigation component with dropdown for mobile
export const Navigation = () => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const navItems = getNavItems(t);
  const { locale: currentLocale, setLocale } = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale !== currentLocale) {
      setLocale(newLocale);
    }
  };

  // Mobile dropdown navigation
  const MobileDropdownNav = () => (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="border-2 border-white bg-transparent text-white hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-3 py-2 font-mono text-xs uppercase tracking-wide">
            <Menu className="w-4 h-4 mr-2 inline" />
            Menu
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="font-mono border-2 border-white bg-neutral-800 text-neutral-200 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.route;
            return (
              <DropdownMenuItem key={item.route} asChild className="rounded-none p-0">
                <Link
                  href={item.route}
                  className={`text-xs uppercase tracking-wide hover:bg-neutral-700 focus:bg-neutral-700 rounded-none w-full px-3 py-2 block ${
                    isActive ? "bg-neutral-700 text-white" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator className="bg-neutral-600 rounded-none" />
          {locales.map((locale) => (
            <DropdownMenuItem 
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`text-xs uppercase tracking-wide hover:bg-neutral-700 focus:bg-neutral-700 rounded-none cursor-pointer px-3 py-2 ${
                currentLocale === locale ? "bg-neutral-700 text-white" : ""
              }`}
            >
              {getLanguageFullName(locale)} ({getLanguageDisplayName(locale)})
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  // Desktop navigation (unchanged)
  const DesktopNav = () => (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.route;

          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className={`
                  block border-2 px-4 py-2 text-sm font-medium font-mono transition-all duration-200 uppercase tracking-wide
                  ${isActive 
                    ? "bg-transparent text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" 
                    : "bg-transparent text-white border-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"}
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      <MobileDropdownNav />
      <DesktopNav />
    </>
  );
};
