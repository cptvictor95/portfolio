import React from 'react';
import { useRouter } from 'next/router';
import { hero } from '../locale/hero';
import dynamic from 'next/dynamic';

import Main from '../layouts/Main';
import Header from '../components/Header';
import Hero from '../sections/Hero';
import SubHero from '../sections/SubHero';
const Skills = dynamic(() => import('../sections/Skills'));
const Projects = dynamic(() => import('../sections/Projects'));
const Contact = dynamic(() => import('../sections/Contact'));
const Footer = dynamic(() => import('../components/Footer'));
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
