import { Image } from '@chakra-ui/image';
import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React from 'react';
import VerticalBar from '../components/VerticalBar';

const Hero: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  return (
    <Flex
      as="section"
      position="relative"
      top="10vh"
      minH={{ base: '75vh', md: '70vh' }}
      maxW={{ base: '100%' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['space-evenly', 'space-around', 'space-around', 'space-evenly']}
      pb={8}
      pl={{ base: 16, sm: 16, md: 16, lg: 8, xl: 8 }}
      pr={{ base: 8, sm: 8, md: 8, lg: 4, xl: 8 }}
      mb={24}
    >
      <VerticalBar />
      <Flex
        as="article"
        maxW={{ base: '100%' }}
        justify={['flex-end']}
        align={['flex-start', 'flex-end', 'center', 'center']}
      >
        <Stack as="section" ml={{ base: 0, md: 12, lg: 12, xl: 12 }}>
          <Heading
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            fontSize={{ base: '5xl', md: '5xl', lg: '6xl', xl: '6xl' }}
            letterSpacing={{
              base: '2px',
              md: '2.5px',
              lg: '2.2px',
              xl: '2.2px',
            }}
            lineHeight={{
              base: '90%',
              md: '85%',
              lg: '90%',
              xl: '90%',
            }}
          >
            {title}
          </Heading>
          <Text
            as={motion.h2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            fontSize={{ base: 'xl', lg: '2xl', xl: '2xl' }}
            lineHeight={{
              base: '100%',
              md: '85%',
              lg: '90%',
              xl: '90%',
            }}
          >
            {subtitle}
          </Text>
        </Stack>
      </Flex>
      <Stack
        as="article"
        maxW={{ base: '80%', sm: '60%', md: '40%', lg: '50%' }}
        minW={{ base: '80%', sm: '60%', md: '350px' }}
        justify={['flex-end', 'flex-end', 'flex-end', 'flex-end']}
        align={{ base: 'center', md: 'center', lg: 'center', xl: 'center' }}
      >
        <Image
          as={motion.img}
          src={'./heroSVG.svg'}
          maxW={{ base: '250px', sm: '250px', md: '60%', lg: '50%' }}
          alt="Ilustra????o colorida de um computador e um celular."
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        />
      </Stack>
    </Flex>
  );
};

export default Hero;
