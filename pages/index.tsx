import React from 'react';
import Main from '../layouts/Main';
import Hero from '../sections/Hero';
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
    </Main>
  );
};

export default Home;
