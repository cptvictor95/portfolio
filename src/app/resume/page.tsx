"use client";

import { useTranslations, useLocale } from "next-intl";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { FileDown } from "lucide-react";
import { getSafeLocale } from "@/shared/locales";

// Resume Page Component - Minimalist typewriter aesthetic
export default function ResumePage() {
  const t = useTranslations("resume");
  const tNav = useTranslations("navigation");
  const locale = getSafeLocale(useLocale());

  const handleDownload = async (format: "pdf" | "docx", language?: "en" | "pt") => {
    // Use current locale if no specific language provided
    const downloadLang = language || locale;
    try {
      const response = await fetch(`/api/resume/download/${format}/${downloadLang}`);
      if (!response.ok) throw new Error("Download failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Victor_Pudo_Resume_${downloadLang.toUpperCase()}.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert(t("downloadError"));
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-2 lg:p-16">
      {/* Single resume card */}
      <div className="border-2 border-white bg-neutral-800 p-4 lg:p-8 max-w-sm lg:max-w-md w-full shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
        {/* Dialog Title */}
        <div className="text-sm text-white font-mono uppercase tracking-wider mb-6">
          {tNav("resume")}
        </div>
        
        {/* Helper text about formats */}
        <div className="mb-6 lg:mb-8">
          <p className="text-sm text-neutral-300 font-mono leading-relaxed">
            {t("noteDescription")}
          </p>
        </div>

        {/* Download button - center on mobile, right on desktop */}
        <div className="flex justify-center lg:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="border-2 border-white bg-neutral-700 text-neutral-200 hover:bg-neutral-600 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] lg:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-4 lg:px-6 py-2 lg:py-3 font-mono text-xs lg:text-sm uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] lg:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <FileDown className="w-4 h-4 mr-2 inline" />
                {t("downloadButton")}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="font-mono border-2 border-white bg-neutral-800 text-neutral-200 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              <DropdownMenuItem 
                onClick={() => handleDownload("pdf")}
                className="text-xs uppercase tracking-wide hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
              >
                {t("formatPdf")} - {locale === "en" ? t("langEnUs") : t("langPtBr")}
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleDownload("docx")}
                className="text-xs uppercase tracking-wide hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
              >
                {t("formatDocx")} - {locale === "en" ? t("langEnUs") : t("langPtBr")}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-neutral-600" />
              {locale !== "en" && (
                <>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("pdf", "en")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    {t("formatPdf")} - {t("langEnUs")}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("docx", "en")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    {t("formatDocx")} - {t("langEnUs")}
                  </DropdownMenuItem>
                </>
              )}
              {locale !== "pt" && (
                <>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("pdf", "pt")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    {t("formatPdf")} - {t("langPtBr")}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("docx", "pt")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    {t("formatDocx")} - {t("langPtBr")}
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
