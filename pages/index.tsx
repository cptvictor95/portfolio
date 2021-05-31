import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Main from '../layouts/Main';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import SubHero from '../sections/SubHero';

const Home: React.FC = () => {
  return (
    <Main title="Victor">
      <Header />
      <Hero
        title="Victor Torres"
        subtitle="Full Stack Web Developer"
        ctaText="Lorem ipsum dolor sit amet."
      />
      <SubHero />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </Main>
  );
};

export default Home;
