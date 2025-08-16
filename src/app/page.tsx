import Image from "next/image";

// Home Page Component - main landing page with hero content
export default function HomePage() {
  return (
    <div className="min-h-screen p-16 font-mono flex items-center justify-center">
      <div className="border-2 border-white bg-neutral-800 p-8 max-w-md w-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
        <div className="text-sm text-white font-mono uppercase tracking-wider mb-6">
          VICTOR.INTRO
        </div>
        
        {/* Avatar and Bio Section */}
        <div className="flex items-start gap-6 mb-6">
          <div className="border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            <Image 
              src="/avatar.jpg" 
              alt="Victor Pudo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          
          <div className="flex-1">
            <p className="text-neutral-300 text-sm leading-relaxed font-mono">
              Victor Pudo, 30, software engineer, entrepreneur, educator and music enthusiast.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-600 pt-4">
          <p className="text-xs text-neutral-500 font-mono leading-relaxed">
            Built with Next.js, TypeScript, Tailwind CSS, and Golang.
          </p>
        </div>
      </div>
    </div>
  );
}
