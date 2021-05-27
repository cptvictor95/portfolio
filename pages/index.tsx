import React from 'react';
import Main from '../layouts/Main';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import SubHero from '../sections/SubHero';

const Home: React.FC = () => {
  return (
    <Main title="Victor">
      <Hero
        title="Victor Torres"
        subtitle="Full Stack Web Developer"
        ctaText="Lorem ipsum dolor sit amet."
      />
      <SubHero />
      <Skills />
      <Projects />
    </Main>
  );
};

export default Home;
