import React from 'react';
import Footer from '../components/Footer';
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
    <Main title="Victor Torres">
      <Header />
      <Hero title="Victor Torres" subtitle="Full Stack Web Developer" />
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
