import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    title: "GitHub",
    subtitle: "Open Source Projects",
    url: "https://github.com/cptvictor95",
    color: "from-gray-700 to-gray-900",
    textColor: "text-white",
    icon: <GithubIcon />,
  },
  {
    title: "LinkedIn",
    subtitle: "Professional Network",
    url: "https://linkedin.com/in/victorcardosopudotorres",
    color: "from-blue-600 to-blue-800",
    textColor: "text-white",
    icon: <LinkedinIcon />,
  },
  {
    title: "Email",
    subtitle: "Direct Contact",
    url: "mailto:victor.cpt95@gmail.com",
    color: "from-green-600 to-green-800",
    textColor: "text-white",
    icon: <MailIcon />,
  },
];

// Contact Page Component - dedicated page for contact information and links
export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-2xl md:text-4xl font-black text-white mb-6">
                CONTACT
              </h1>
            </div>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Ready for freelance projects and collaborations. Let&apos;s build
              something amazing together!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4 mb-16">
            {contactLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center gap-2 w-fit"
              >
                <span>{link.icon}</span>
                <h3 className="text-xl text-white text-center">{link.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
