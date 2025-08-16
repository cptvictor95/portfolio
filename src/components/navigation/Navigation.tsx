"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { getNavItems } from "@/constants/sections";
import Link from "next/link";

// Simplified navigation component
export const Navigation = () => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const navItems = getNavItems(t);

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.route;

          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className={`
                  block border-2 px-4 py-2 text-base font-medium font-mono transition-all duration-200 uppercase tracking-wide
                  ${isActive 
                    ? "bg-white text-neutral-900 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]" 
                    : "bg-transparent text-white border-white hover:bg-white hover:text-neutral-900 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]"}
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
};
