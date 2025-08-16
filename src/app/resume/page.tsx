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

// Resume Page Component - Minimalist typewriter aesthetic
export default function ResumePage() {
  const t = useTranslations("resume");
  const locale = useLocale() as "en" | "pt";

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
    <div className="min-h-screen p-16 font-mono flex items-center justify-center">
      {/* Single resume card */}
      <div className="border-2 border-white bg-neutral-800 p-8 max-w-md w-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
      {/* Subtitle */}
      <p className="text-neutral-300 text-sm mb-8 leading-relaxed">
          {t("resumeSubtitle")}
        </p>
        {/* Title and button on same line */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-neutral-200 font-mono uppercase tracking-wider">
            {t("fileLabel")}
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="border-2 border-white bg-neutral-700 text-neutral-200 hover:bg-neutral-600 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 px-6 py-3 font-mono text-sm uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)]">
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

        

        {/* Helper text inside card */}
        <div className="border-t border-neutral-600 pt-6">
          <p className="text-xs text-neutral-500 font-mono leading-relaxed">
            {t("noteDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}
