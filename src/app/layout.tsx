import type { Metadata } from "next";
import { DM_Sans, DM_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "../lib/themes/variants/retropc/font.css";
import "../lib/themes/variants/typewriter/font.css";
import "../lib/themes/variants/modern/font.css";
import { ThemeProvider } from "@/lib/themes/components/theme-context";
import { themeInitScript } from "@/lib/themes/theme-script";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Pudo",
  description: "Victor Pudo's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html { visibility: hidden; }
        `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
