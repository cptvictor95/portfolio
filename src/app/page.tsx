import ReactLenis from "lenis/react";
import { useTranslations } from "next-intl";

// Home Page Component - main landing page with hero content
export default function HomePage() {
  return (
    <ReactLenis>
      <main className="h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3" />

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {/* Name with neobrutalism effect */}
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-black text-white">
                Victor
              </h1>
              <div className="absolute -top-2 -left-2 text-7xl md:text-8xl font-black text-white/10 -z-10">
                Victor
              </div>
            </div>

            {/* Title with subtle animation */}
            <h2 className="text-2xl md:text-3xl text-neutral-300 font-medium">
              Software Engineer & Tech Lead
            </h2>

            {/* Description */}
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Specialized in JavaScript ecosystems, React, Node.js, and cloud
              architectures. Building scalable solutions with functional
              programming principles.
            </p>

            {/* CTA Buttons with hover effects */}
            <div className="flex gap-6 justify-center pt-8">
              <a
                href="/resume"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  View Resume
                </span>
              </a>

              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-pulse" />
        <div className="absolute top-40 right-32 w-12 h-12 bg-blue-500/20 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-white/15 rotate-45" />
      </main>
    </ReactLenis>
  );
}
