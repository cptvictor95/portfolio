import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/providers";
import { Navigation, LanguageSwitcher } from "@/components/navigation";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Pudo | Software Engineer",
  description:
    "Experienced Software Engineer specializing in React, Node.js, and cloud technologies. Available for freelance projects.",
  keywords: [
    "Software Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Freelance",
    "Full Stack Developer",
  ],
  authors: [{ name: "Victor Cardoso Pudo Torres" }],
  openGraph: {
    title: "Victor Pudo | Software Engineer",
    description:
      "Experienced Software Engineer specializing in React, Node.js, and cloud technologies. Available for freelance projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
        >
          <LocaleProvider>
            {/* Global Navigation - persists across routes */}
            <Navigation />

            {/* Global Language Switcher - persists across routes */}
            <div className="fixed top-6 right-6 z-50">
              <LanguageSwitcher />
            </div>

            {/* Page Transitions - persists across routes */}
            {children}
          </LocaleProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
