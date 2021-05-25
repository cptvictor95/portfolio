import React from 'react';
import Main from '../layouts/Main';
import Hero from '../sections/Hero';

const Home: React.FC = () => {
  return (
    <Main title="Victor">
      <Hero
        title="Victor"
        subtitle="Full Stack Web Developer"
        ctaText="Lorem ipsum dolor sit amet."
      />
    </Main>
  );
};

export default Home;
