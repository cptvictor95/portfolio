import { readFile } from "fs/promises";
import { join } from "path";

// Test script to verify resume files exist and are accessible
async function testResumeFiles() {
  const resumeFormats = ["pdf", "docx"] as const;
  const resumeLanguages = ["EN", "PT"] as const;
  
  console.log("🔍 Testing resume files...\n");
  
  for (const lang of resumeLanguages) {
    console.log(`📁 ${lang === "EN" ? "English" : "Portuguese"} files:`);
    
    for (const format of resumeFormats) {
      const fileName = `Victor_Pudo_Resume_${lang}.${format}`;
      const filePath = join(process.cwd(), "public", "resumes", fileName);
      
      try {
        const stats = await readFile(filePath);
        const sizeKB = Math.round(stats.length / 1024);
        console.log(`  ✅ ${fileName} - ${sizeKB}KB`);
      } catch (error) {
        console.log(`  ❌ ${fileName} - File not found`);
      }
    }
    console.log();
  }
  
  console.log("🚀 Resume file test completed!");
}

testResumeFiles().catch(console.error);