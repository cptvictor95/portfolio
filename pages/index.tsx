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
import { Flex } from '@chakra-ui/react';

const Home: React.FC = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Main title="Victor Pudo">
      <Header />
      <Flex as="section" direction="column" gap="20">
        <Hero
          title="VICTOR PUDO"
          subtitle={
            locale === 'pt_BR' ? hero.ptBR.subtitle : hero.enUS.subtitle
          }
        />

        <SubHero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
      <ScrollToTop />
    </Main>
  );
};

export default Home;
