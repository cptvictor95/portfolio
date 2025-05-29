"use client";

import { usePathname } from "next/navigation";
import { Navigation, LanguageSwitcher } from "@/components/navigation";
import { PageTransition } from "@/components/transitions";
import { BaseComponentProps } from "@/types";

interface PortfolioLayoutProps extends BaseComponentProps {
  children: React.ReactNode;
}

// Portfolio Layout Component - handles navigation and page transitions
export const PortfolioLayout = ({
  children,
  className = "",
}: PortfolioLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className={`min-h-screen relative ${className}`}>
      {/* Navigation with rolling transitions */}
      <Navigation currentRoute={pathname} />

      {/* Language switcher */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Page content with transitions */}
      <PageTransition>{children}</PageTransition>
    </div>
  );
};
