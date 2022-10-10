import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Main from '../layouts/Main';
import { hero } from '../locale/hero';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import SubHero from '../sections/SubHero';

const Home: React.FC = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Main title="Victor Torres">
      <Header />
      <Hero
        title="Victor Torres"
        subtitle={locale === 'pt-BR' ? hero.ptBR.subtitle : hero.enUS.subtitle}
      />

      <SubHero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Main>
  );
};

export default Home;
