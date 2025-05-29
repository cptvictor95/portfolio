import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";

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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
