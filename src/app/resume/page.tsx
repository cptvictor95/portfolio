"use client";

import { useTranslations } from "next-intl";

// Resume Page Component - dedicated page for resume content and downloads
export default function ResumePage() {
  const t = useTranslations("resume");

  const handleDownload = async (format: "pdf" | "docx", language: "en" | "pt") => {
    try {
      const response = await fetch(`/api/resume/download/${format}/${language}`);
      if (!response.ok) throw new Error("Download failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Victor_Pudo_Resume_${language.toUpperCase()}.${format}`;
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">{t("title")}</h1>
        <p className="text-white/70 text-lg">{t("subtitle")}</p>
      </div>

      <div className="bg-white/5 border border-white/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Download Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* English Downloads */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white border-b border-white/20 pb-2">
              English
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleDownload("pdf", "en")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium"
              >
                {t("downloadPdf")} (EN)
              </button>
              <button 
                onClick={() => handleDownload("docx", "en")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium"
              >
                {t("downloadDocx")} (EN)
              </button>
            </div>
          </div>

          {/* Portuguese Downloads */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white border-b border-white/20 pb-2">
              Português
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleDownload("pdf", "pt")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium"
              >
                {t("downloadPdf")} (PT)
              </button>
              <button 
                onClick={() => handleDownload("docx", "pt")}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium"
              >
                {t("downloadDocx")} (PT)
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/60 text-sm">
            <strong>Note:</strong> PDF files are optimized for viewing and printing. 
            DOCX files are editable and compatible with Microsoft Word and similar applications.
          </p>
        </div>
      </div>
    </div>
  );
}
