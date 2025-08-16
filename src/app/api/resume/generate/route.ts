import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { writeFile } from "fs/promises";
import { getResumeFilePath } from "@/lib/resumeProcessor";

// Generate PDF resumes from DOCX or create placeholder PDFs
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { language } = body;

    if (!["en", "pt"].includes(language)) {
      return NextResponse.json({ error: "Invalid language" }, { status: 400 });
    }

    // Create a professional PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]); // US Letter size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const pageHeight = page.getHeight();
    const pageWidth = page.getWidth();
    const margin = 72; // 1 inch margin

    // Header
    page.drawText("VICTOR CARDOSO PUDO TORRES", {
      x: margin,
      y: pageHeight - margin,
      size: 20,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText("Software Engineer", {
      x: margin,
      y: pageHeight - margin - 30,
      size: 14,
      font: font,
      color: rgb(0.3, 0.3, 0.3),
    });

    // Contact Info
    let yPosition = pageHeight - margin - 80;
    const contactInfo = language === "en" 
      ? [
          "Email: victor@example.com",
          "Phone: +55 (11) 99999-9999",
          "LinkedIn: linkedin.com/in/victorpudo",
          "GitHub: github.com/cptvictor95"
        ]
      : [
          "Email: victor@example.com",
          "Telefone: +55 (11) 99999-9999",
          "LinkedIn: linkedin.com/in/victorpudo",
          "GitHub: github.com/cptvictor95"
        ];

    contactInfo.forEach(info => {
      page.drawText(info, {
        x: margin,
        y: yPosition,
        size: 11,
        font: font,
      });
      yPosition -= 18;
    });

    // Professional Summary
    yPosition -= 20;
    const summaryTitle = language === "en" ? "PROFESSIONAL SUMMARY" : "RESUMO PROFISSIONAL";
    page.drawText(summaryTitle, {
      x: margin,
      y: yPosition,
      size: 14,
      font: boldFont,
    });

    yPosition -= 25;
    const summary = language === "en" 
      ? "Experienced Software Engineer specializing in React, Node.js, and cloud technologies. Available for freelance projects and collaboration."
      : "Engenheiro de Software experiente especializado em React, Node.js e tecnologias de nuvem. Disponível para projetos freelance e colaboração.";

    // Wrap text for summary
    const words = summary.split(" ");
    let line = "";
    const lineHeight = 16;
    const maxWidth = pageWidth - 2 * margin;

    words.forEach(word => {
      const testLine = line + (line ? " " : "") + word;
      const textWidth = font.widthOfTextAtSize(testLine, 11);
      
      if (textWidth > maxWidth && line) {
        page.drawText(line, {
          x: margin,
          y: yPosition,
          size: 11,
          font: font,
        });
        yPosition -= lineHeight;
        line = word;
      } else {
        line = testLine;
      }
    });

    if (line) {
      page.drawText(line, {
        x: margin,
        y: yPosition,
        size: 11,
        font: font,
      });
      yPosition -= lineHeight;
    }

    // Experience Section
    yPosition -= 20;
    const experienceTitle = language === "en" ? "EXPERIENCE" : "EXPERIÊNCIA";
    page.drawText(experienceTitle, {
      x: margin,
      y: yPosition,
      size: 14,
      font: boldFont,
    });

    yPosition -= 25;
    page.drawText("Senior Software Engineer", {
      x: margin,
      y: yPosition,
      size: 12,
      font: boldFont,
    });

    yPosition -= 18;
    page.drawText("2022 - Present", {
      x: margin,
      y: yPosition,
      size: 11,
      font: font,
      color: rgb(0.4, 0.4, 0.4),
    });

    // Skills Section
    yPosition -= 40;
    const skillsTitle = language === "en" ? "TECHNICAL SKILLS" : "HABILIDADES TÉCNICAS";
    page.drawText(skillsTitle, {
      x: margin,
      y: yPosition,
      size: 14,
      font: boldFont,
    });

    yPosition -= 25;
    const skills = [
      "• React, Next.js, TypeScript",
      "• Node.js, Express, NestJS", 
      "• AWS, Docker, Kubernetes",
      "• PostgreSQL, MongoDB, Redis",
      "• Git, CI/CD, Agile"
    ];

    skills.forEach(skill => {
      page.drawText(skill, {
        x: margin,
        y: yPosition,
        size: 11,
        font: font,
      });
      yPosition -= 18;
    });

    // Footer
    page.drawText(language === "en" ? "Generated with Next.js Portfolio" : "Gerado com Portfolio Next.js", {
      x: margin,
      y: 50,
      size: 8,
      font: font,
      color: rgb(0.6, 0.6, 0.6),
    });

    // Save PDF
    const pdfBytes = await pdfDoc.save();
    const pdfPath = getResumeFilePath(language, "pdf");
    await writeFile(pdfPath, pdfBytes);

    return NextResponse.json({ 
      message: "PDF generated successfully",
      fileName: `Victor_Pudo_Resume_${language.toUpperCase()}.pdf`
    });

  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}