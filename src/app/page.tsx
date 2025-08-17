"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// Home Page Component - main landing page with hero content
export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="w-full flex items-center justify-center px-2 lg:p-16">
      <div className="border-2 border-white bg-neutral-800 p-4 lg:p-8 max-w-sm lg:max-w-md w-full shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
        <div className="text-sm text-white font-mono uppercase tracking-wider mb-6">
          {t("title")}
        </div>
        
        {/* Avatar and Bio Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6 mb-6">
          <div className="border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mx-auto sm:mx-0 flex-shrink-0">
            <Image 
              src="/avatar.jpg" 
              alt="Victor Pudo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <p className="text-neutral-300 text-sm leading-relaxed font-mono">
              {t("bio")}
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-600 pt-4">
          <p className="text-xs text-neutral-500 font-mono leading-relaxed">
            {t("builtWith")}
          </p>
        </div>
      </div>
    </div>
  );
}
