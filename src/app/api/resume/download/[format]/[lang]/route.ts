import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

// Supported formats and languages
type Format = "pdf" | "docx";
type Language = "en" | "pt";

interface RouteParams {
  params: Promise<{
    format: Format;
    lang: Language;
  }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { format, lang } = await params;

    // Validate parameters
    if (!["pdf", "docx"].includes(format)) {
      return NextResponse.json({ error: "Invalid format" }, { status: 400 });
    }

    if (!["en", "pt"].includes(lang)) {
      return NextResponse.json({ error: "Invalid language" }, { status: 400 });
    }

    // Construct file path
    const fileName = `Victor_Pudo_Resume_${lang.toUpperCase()}.${format}`;
    const filePath = join(process.cwd(), "public", "resumes", fileName);

    try {
      // Read the file
      const fileBuffer = await readFile(filePath);

      // Set appropriate content type
      const contentType = format === "pdf" 
        ? "application/pdf" 
        : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

      // Create response with file
      const response = new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename="${fileName}"`,
          "Content-Length": fileBuffer.length.toString(),
        },
      });

      return response;
    } catch (fileError) {
      console.error("File read error:", fileError);
      return NextResponse.json(
        { error: "Resume file not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Download API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}