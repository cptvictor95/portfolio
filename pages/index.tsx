import React from 'react';
import { useRouter } from 'next/router';
import Main from '../layouts/Main';
import { hero } from '../locale/hero';
import Header from '../components/Header';
import Hero from '../sections/Hero';
import SubHero from '../sections/SubHero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Main title="Victor Torres">
      <Header />
      <Hero
        title="Victor Torres"
        subtitle={locale === 'pt_BR' ? hero.ptBR.subtitle : hero.enUS.subtitle}
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
