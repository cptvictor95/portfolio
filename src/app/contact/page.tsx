// Contact Page Component - dedicated page for contact information and links
export default function ContactPage() {
  const contactLinks = [
    {
      title: "GITHUB",
      subtitle: "Open Source Projects",
      url: "https://github.com/cptvictor95",
      color: "from-gray-700 to-gray-900",
      textColor: "text-white",
      icon: "🔗",
    },
    {
      title: "LINKEDIN",
      subtitle: "Professional Network",
      url: "https://linkedin.com/in/victorcardosopudotorres",
      color: "from-blue-600 to-blue-800",
      textColor: "text-white",
      icon: "💼",
    },
    {
      title: "EMAIL",
      subtitle: "Direct Contact",
      url: "mailto:victor.cpt95@gmail.com",
      color: "from-green-600 to-green-800",
      textColor: "text-white",
      icon: "📧",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-green-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Main content */}
      <div className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
                CONTACT
              </h1>
              <div className="absolute -top-2 -left-2 text-6xl md:text-7xl font-black text-white/10 -z-10">
                CONTACT
              </div>
            </div>
            <p className="text-xl text-green-200 max-w-2xl mx-auto">
              Ready for freelance projects and collaborations. Let's build
              something amazing together!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-2xl overflow-hidden"
              >
                {/* Hover effect background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-3xl`}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {link.title}
                  </h3>
                  <p className="text-green-200 group-hover:text-white transition-colors duration-300">
                    {link.subtitle}
                  </p>
                </div>

                {/* Neobrutalism shadow effect */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              FREELANCE AVAILABILITY
            </h2>
            <p className="text-green-200 text-lg mb-6">
              Currently available for new projects and consulting opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React Development",
                "Node.js Backend",
                "Cloud Architecture",
                "Technical Leadership",
              ].map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/20 rounded-xl font-semibold text-white border border-white/30"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-20 w-20 h-20 bg-teal-400/20 rounded-2xl rotate-12 animate-pulse" />
      <div className="absolute top-60 left-32 w-16 h-16 bg-white/15 rounded-full animate-bounce" />
      <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-green-400/20 rotate-45" />
    </main>
  );
}
