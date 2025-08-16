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
                  block rounded-lg text-base font-medium transition-all duration-200
                  ${isActive ? "text-white font-bold" : "text-white/70 hover:text-white"}
                  hover:scale-105 active:scale-95
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
