// Resume Page Component - dedicated page for resume content and downloads
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full -translate-x-1/4 translate-y-1/4" />

      {/* Main content */}
      <div className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
                RESUME
              </h1>
              <div className="absolute -top-2 -left-2 text-6xl md:text-7xl font-black text-white/10 -z-10">
                RESUME
              </div>
            </div>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Download my professional resume or view my experience and skills
              below
            </p>
          </div>

          {/* Download Section with neobrutalism buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <button className="group relative px-10 py-6 bg-white text-black font-black text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-black">
              <span className="relative z-10">DOWNLOAD PDF</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-black">
                DOWNLOAD PDF
              </span>
            </button>

            <button className="px-10 py-6 border-4 border-white text-white font-black text-lg rounded-2xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              DOWNLOAD DOCX
            </button>
          </div>

          {/* Resume Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-black text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Tech Lead & Software Engineer
                  </h3>
                  <p className="text-blue-200">Factree • 2023 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Leading development teams and architecting scalable
                    solutions
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Full Stack Developer
                  </h3>
                  <p className="text-blue-200">
                    Various Projects • 2020 - 2023
                  </p>
                  <p className="text-gray-300 mt-2">
                    Freelance and contract work building modern web applications
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-black text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Next.js",
                  "PostgreSQL",
                  "Firebase",
                  "Tailwind",
                  "Docker",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/20 rounded-xl p-3 text-center font-semibold text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-20 w-20 h-20 bg-yellow-400/20 rounded-2xl rotate-12 animate-pulse" />
      <div className="absolute top-60 right-32 w-16 h-16 bg-white/15 rounded-full animate-bounce" />
      <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-purple-400/20 rotate-45" />
    </main>
  );
}
