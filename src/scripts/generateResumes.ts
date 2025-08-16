import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { writeFile } from "fs/promises";
import { join } from "path";

async function generateResumePDF(language: "en" | "pt") {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // US Letter size
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const pageHeight = page.getHeight();
  const pageWidth = page.getWidth();
  const margin = 72;

  // Header
  page.drawText("VICTOR CARDOSO PUDO TORRES", {
    x: margin,
    y: pageHeight - margin,
    size: 20,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(language === "en" ? "Software Engineer" : "Engenheiro de Software", {
    x: margin,
    y: pageHeight - margin - 30,
    size: 14,
    font: font,
    color: rgb(0.3, 0.3, 0.3),
  });

  // Contact Info
  let yPosition = pageHeight - margin - 80;
  const contactInfo = [
    "Email: victor@example.com",
    language === "en" ? "Phone: +55 (11) 99999-9999" : "Telefone: +55 (11) 99999-9999",
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
    ? "Experienced Software Engineer specializing in React, Node.js, and cloud technologies. Passionate about building scalable applications and solving complex problems. Available for freelance projects and collaboration."
    : "Engenheiro de Software experiente especializado em React, Node.js e tecnologias de nuvem. Apaixonado por construir aplicações escaláveis e resolver problemas complexos. Disponível para projetos freelance e colaboração.";

  // Simple text wrapping
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

  // Experience
  yPosition -= 20;
  page.drawText(language === "en" ? "EXPERIENCE" : "EXPERIÊNCIA", {
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

  yPosition -= 20;
  const responsibilities = language === "en" 
    ? [
        "• Developed and maintained React applications with TypeScript",
        "• Built scalable backend services using Node.js and Express",
        "• Implemented CI/CD pipelines and cloud infrastructure",
        "• Collaborated with cross-functional teams using Agile methodologies"
      ]
    : [
        "• Desenvolveu e manteve aplicações React com TypeScript",
        "• Construiu serviços backend escaláveis usando Node.js e Express",
        "• Implementou pipelines CI/CD e infraestrutura em nuvem",
        "• Colaborou com equipes multifuncionais usando metodologias Ágeis"
      ];

  responsibilities.forEach(resp => {
    page.drawText(resp, {
      x: margin,
      y: yPosition,
      size: 11,
      font: font,
    });
    yPosition -= 16;
  });

  // Skills
  yPosition -= 20;
  page.drawText(language === "en" ? "TECHNICAL SKILLS" : "HABILIDADES TÉCNICAS", {
    x: margin,
    y: yPosition,
    size: 14,
    font: boldFont,
  });

  yPosition -= 25;
  const skills = [
    "• Frontend: React, Next.js, TypeScript, Tailwind CSS",
    "• Backend: Node.js, Express, NestJS, Python",
    "• Cloud: AWS, Docker, Kubernetes, Serverless",
    "• Database: PostgreSQL, MongoDB, Redis",
    "• Tools: Git, CI/CD, Jest, ESLint"
  ];

  skills.forEach(skill => {
    page.drawText(skill, {
      x: margin,
      y: yPosition,
      size: 11,
      font: font,
    });
    yPosition -= 16;
  });

  // Footer
  page.drawText(language === "en" ? "Generated with Next.js Portfolio" : "Gerado com Portfolio Next.js", {
    x: margin,
    y: 50,
    size: 8,
    font: font,
    color: rgb(0.6, 0.6, 0.6),
  });

  const pdfBytes = await pdfDoc.save();
  const fileName = `Victor_Pudo_Resume_${language.toUpperCase()}.pdf`;
  const filePath = join(process.cwd(), "public", "resumes", fileName);
  
  await writeFile(filePath, pdfBytes);
  console.log(`Generated: ${fileName}`);
}

// Generate both language versions
async function main() {
  try {
    await generateResumePDF("en");
    await generateResumePDF("pt");
    console.log("Resume PDFs generated successfully!");
  } catch (error) {
    console.error("Error generating PDFs:", error);
  }
}

main();