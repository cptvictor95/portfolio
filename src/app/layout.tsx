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
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Victor Pudo - Software Engineer",
      },
    ],
    siteName: "Victor Pudo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Pudo | Software Engineer",
    description:
      "Experienced Software Engineer specializing in React, Node.js, and cloud technologies. Available for freelance projects.",
    images: ["/avatar.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/avatar.jpg",
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
          <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row lg:overflow-hidden">
            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between p-4 border-b-2 border-white bg-neutral-900">
              {/* Victor Pudo info */}
              <div>
                <h1 className="text-lg font-mono font-bold tracking-tight leading-none text-white">
                  Victor Pudo
                </h1>
                <div className="text-xs text-neutral-300 mt-1 font-mono">
                  Software Engineer
                </div>
              </div>
              
              {/* Navigation dropdown (includes language switcher) */}
              <Navigation />
            </header>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col justify-start w-64 min-w-[16rem] max-w-xs h-screen p-8 bg-neutral-900">
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
            <main className="flex-1 flex flex-col justify-center items-center px-2 py-4 lg:p-8 lg:h-screen">
              <div className="w-full flex flex-col justify-center items-center lg:h-full">
                {children}
              </div>
            </main>
          </div>
        </ServerLocaleWrapper>
      </body>
    </html>
  );
}
