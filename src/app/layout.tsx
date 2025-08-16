import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/providers";
import { Navigation, LanguageSwitcher } from "@/components/navigation";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <LocaleProvider>
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(2, 8, 2)"
            gradientBackgroundEnd="rgb(5, 15, 5)"
            firstColor="3, 12, 3"
            secondColor="8, 18, 8"
            thirdColor="5, 20, 5"
            fourthColor="10, 25, 10"
            fifthColor="15, 30, 15"
            pointerColor="20, 35, 20"
            size="100%"
            blendingValue="hard-light"
            interactive={false}
          >
            <section className="w-full h-screen relative flex overflow-hidden">
              {/* Sidebar */}
              <aside className="flex flex-col justify-start w-64 min-w-[16rem] max-w-xs h-full p-8">
                <Navigation />
                <div className="mt-auto pt-8 space-y-4">
                  <LanguageSwitcher />
                  <div>
                    <h1 className="text-2xl font-light tracking-tight leading-none text-white">
                      Victor Pudo
                    </h1>
                    <div className="text-sm text-white/70 mt-1">
                      Software Engineer
                    </div>
                  </div>
                </div>
              </aside>

              {/* Content Area */}
              <main className="flex-1 h-full flex flex-col justify-end items-end p-8">
                <div className="w-full h-full flex flex-col justify-end items-end">
                  {children}
                </div>
              </main>
            </section>
          </BackgroundGradientAnimation>
        </LocaleProvider>
      </body>
    </html>
  );
}
