"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "@/providers/LocaleProvider";
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
  const { locale } = useLocale();

  // Map locale to language code
  const getCurrentLanguage = (): "en" | "pt" => {
    return locale === "pt" ? "pt" : "en";
  };

  const handleDownload = async (format: "pdf" | "docx", language?: "en" | "pt") => {
    // Use current locale if no specific language provided
    const downloadLang = language || getCurrentLanguage();
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
      alert("Failed to download resume. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-16 font-mono flex items-center justify-center">
      {/* Single resume card */}
      <div className="border-2 border-neutral-400 bg-neutral-800 p-8 max-w-md w-full">
        {/* Title and button on same line */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-neutral-200 font-mono uppercase tracking-wider">
            RESUME.FILE
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="border-2 border-neutral-400 bg-neutral-700 text-neutral-200 hover:bg-neutral-600 hover:border-neutral-300 transition-colors duration-200 px-6 py-3 font-mono text-sm uppercase tracking-wide">
                <FileDown className="w-4 h-4 mr-2 inline" />
                Download
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="font-mono border-2 border-neutral-400 bg-neutral-800 text-neutral-200 rounded-none"
            >
              <DropdownMenuItem 
                onClick={() => handleDownload("pdf")}
                className="text-xs uppercase tracking-wide hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
              >
                PDF - {getCurrentLanguage() === "en" ? "EN-US" : "PT-BR"}
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleDownload("docx")}
                className="text-xs uppercase tracking-wide hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
              >
                DOCX - {getCurrentLanguage() === "en" ? "EN-US" : "PT-BR"}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-neutral-600" />
              {getCurrentLanguage() !== "en" && (
                <>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("pdf", "en")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    PDF - EN-US
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("docx", "en")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    DOCX - EN-US
                  </DropdownMenuItem>
                </>
              )}
              {getCurrentLanguage() !== "pt" && (
                <>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("pdf", "pt")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    PDF - PT-BR
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDownload("docx", "pt")}
                    className="text-xs uppercase tracking-wide text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700 rounded-none"
                  >
                    DOCX - PT-BR
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Subtitle */}
        <p className="text-neutral-300 text-sm mb-8 leading-relaxed">
          {t("resumeSubtitle")}
        </p>

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
