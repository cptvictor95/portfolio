"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// Section enum for type safety and maintainability
enum Section {
  HERO = "hero",
  RESUME = "resume",
  ABOUT = "about",
  CONTACT = "contact",
}

// Navigation component - pure function with next-intl
const Navigation = ({
  currentSection,
  onSectionChange,
}: {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}) => {
  const t = useTranslations("navigation");

  const sections = [
    { id: Section.HERO, label: t("home") },
    { id: Section.RESUME, label: t("resume") },
    { id: Section.ABOUT, label: t("about") },
    { id: Section.CONTACT, label: t("contact") },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-2 bg-black/20 backdrop-blur-sm rounded-full p-2">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
              currentSection === id
                ? "bg-white text-black"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Language Switcher positioned separately - pure function
const LanguageSwitcherFixed = () => (
  <div className="fixed top-6 right-6 z-50">
    <LanguageSwitcher />
  </div>
);

// Hero Section Component - pure function with next-intl
const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">{t("name")}</h1>
        <h2 className="text-2xl text-neutral-400 mb-6">{t("title")}</h2>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

// Resume Section Component - pure function with next-intl
const ResumeSection = () => {
  const t = useTranslations("resume");

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-800">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
        <p className="text-neutral-400 mb-8">{t("subtitle")}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors">
            {t("downloadPdf")}
          </button>
          <button className="bg-neutral-700 text-white px-6 py-3 rounded-lg hover:bg-neutral-600 transition-colors">
            {t("downloadDocx")}
          </button>
        </div>
      </div>
    </section>
  );
};

// About Section Component - pure function with next-intl
const AboutSection = () => {
  const t = useTranslations("about");

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-700">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
        <p className="text-lg text-neutral-300 leading-relaxed">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

// Contact Section Component - pure function with next-intl
const ContactSection = () => {
  const t = useTranslations("contact");

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-600">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
        <p className="text-lg text-neutral-300 mb-8">{t("subtitle")}</p>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/cptvictor95"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            {t("github")}
          </a>
          <a
            href="https://linkedin.com/in/victorcardosopudotorres"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
          >
            {t("linkedin")}
          </a>
          <a
            href="mailto:victor.cpt95@gmail.com"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
          >
            {t("email")}
          </a>
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HERO);

  // Section renderer - pure function
  const renderSection = (section: Section) => {
    switch (section) {
      case Section.HERO:
        return <HeroSection />;
      case Section.RESUME:
        return <ResumeSection />;
      case Section.ABOUT:
        return <AboutSection />;
      case Section.CONTACT:
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <main className="relative">
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <LanguageSwitcherFixed />

      <div className="transition-all duration-500 ease-in-out">
        {renderSection(currentSection)}
      </div>
    </main>
  );
}
