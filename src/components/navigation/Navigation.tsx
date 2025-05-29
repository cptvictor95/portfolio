"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { getNavItems } from "@/constants/sections";
import { useTransitionRouter } from "next-view-transitions";

// Simplified navigation component
export const Navigation = () => {
  const router = useTransitionRouter();
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const navItems = getNavItems(t);

  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-2 bg-black/20 backdrop-blur-md rounded-2xl p-2 border border-white/20">
        {navItems.map((item) => {
          const isActive = pathname === item.route;

          return (
            <a
              onClick={(e) => {
                e.preventDefault();

                router.push(item.route, {
                  onTransitionReady: slideInOut,
                });
              }}
              key={item.route}
              href={item.route}
              className={`
                px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }
                hover:scale-105 active:scale-95
              `}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
