import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

// Types for resume processing
export type ResumeFormat = "pdf" | "docx";
export type ResumeLanguage = "en" | "pt";

export interface ResumeFile {
  format: ResumeFormat;
  language: ResumeLanguage;
  fileName: string;
  filePath: string;
}

// File naming utility
export function getResumeFileName(language: ResumeLanguage, format: ResumeFormat): string {
  return `Victor_Pudo_Resume_${language.toUpperCase()}.${format}`;
}

// Get file path in public directory
export function getResumeFilePath(language: ResumeLanguage, format: ResumeFormat): string {
  const fileName = getResumeFileName(language, format);
  return join(process.cwd(), "public", "resumes", fileName);
}

// Check if resume file exists
export async function resumeFileExists(language: ResumeLanguage, format: ResumeFormat): Promise<boolean> {
  try {
    const filePath = getResumeFilePath(language, format);
    await readFile(filePath);
    return true;
  } catch {
    return false;
  }
}

// Generate PDF from DOCX (placeholder - would need actual conversion library)
export async function convertDocxToPdf(docxPath: string, pdfPath: string): Promise<void> {
  try {
    // This is a placeholder - in a real implementation, you'd use a library like:
    // - libre-office-convert
    // - docx-pdf
    // - mammoth + puppeteer
    
    // For now, we'll create a simple PDF with a message
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]); // Letter size
    
    page.drawText("Resume PDF conversion in progress...", {
      x: 50,
      y: 700,
      size: 12,
    });
    
    page.drawText("Please use the DOCX version for now.", {
      x: 50,
      y: 680,
      size: 12,
    });
    
    const pdfBytes = await pdfDoc.save();
    await writeFile(pdfPath, pdfBytes);
  } catch (error) {
    console.error("PDF conversion error:", error);
    throw new Error("Failed to convert DOCX to PDF");
  }
}

// Generate missing resume files
export async function generateMissingResumes(): Promise<void> {
  const languages: ResumeLanguage[] = ["en", "pt"];
  const formats: ResumeFormat[] = ["pdf", "docx"];
  
  for (const lang of languages) {
    for (const format of formats) {
      const exists = await resumeFileExists(lang, format);
      
      if (!exists) {
        console.log(`Generating missing resume: ${getResumeFileName(lang, format)}`);
        
        if (format === "pdf") {
          // Try to convert from DOCX
          const docxPath = getResumeFilePath(lang, "docx");
          const pdfPath = getResumeFilePath(lang, "pdf");
          
          const docxExists = await resumeFileExists(lang, "docx");
          if (docxExists) {
            await convertDocxToPdf(docxPath, pdfPath);
          }
        }
      }
    }
  }
}

// Resume metadata
export interface ResumeMetadata {
  fileName: string;
  size: number;
  lastModified: Date;
  available: boolean;
}

export async function getResumeMetadata(language: ResumeLanguage, format: ResumeFormat): Promise<ResumeMetadata> {
  const fileName = getResumeFileName(language, format);
  const filePath = getResumeFilePath(language, format);
  
  try {
    const stats = await readFile(filePath);
    return {
      fileName,
      size: stats.length,
      lastModified: new Date(),
      available: true,
    };
  } catch {
    return {
      fileName,
      size: 0,
      lastModified: new Date(),
      available: false,
    };
  }
}