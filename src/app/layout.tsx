import type { Metadata } from "next";
import "./globals.css";
import { ServerLocaleWrapper } from "@/providers/ServerLocaleWrapper";
import { Navigation, LanguageSwitcher } from "@/components/navigation";

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
      <body className="antialiased text-white bg-primary overflow-x-hidden font-mono">
        <ServerLocaleWrapper>
          <section className="w-full h-screen relative flex overflow-hidden">
            {/* Sidebar */}
            <aside className="flex flex-col justify-start w-64 min-w-[16rem] max-w-xs h-full p-8">
              <Navigation />
              <div className="mt-auto pt-8 space-y-4">
                <LanguageSwitcher />
                <div>
                  <h1 className="text-2xl font-mono font-bold tracking-tight leading-none text-white">
                    Victor Pudo
                  </h1>
                  <div className="text-sm text-neutral-300 mt-1 font-mono">
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
        </ServerLocaleWrapper>
      </body>
    </html>
  );
}
