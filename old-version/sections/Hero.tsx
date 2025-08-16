import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'motion/react';
import React from 'react';
import VerticalBar from '../components/VerticalBar';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { subhero } from '../locale/subhero';

const Hero: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  const { locale } = useRouter();
  return (
    <Flex
      as="section"
      position="relative"
      minH="90vh"
      maxW="100%"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['space-evenly', 'space-around', 'space-around', 'space-evenly']}
      pl={{ base: 16, sm: 16, md: 16, lg: 8, xl: 8 }}
      pr={{ base: 8, sm: 8, md: 8, lg: 4, xl: 8 }}
    >
      <VerticalBar />
      <Flex
        as="article"
        maxW="100%"
        justify="center"
        align={['flex-start', 'flex-end', 'center', 'center']}
      >
        <Stack
          as="section"
          ml={{ base: 0, md: 12, lg: 12, xl: 12 }}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Heading
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl', xl: '8xl' }}
            fontFamily="Barlow"
            letterSpacing={{
              base: '2px',
              md: '2.5px',
              lg: '2.2px',
              xl: '2.2px',
            }}
          >
            {title}
          </Heading>
          <Text
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            textStyle="h5"
            fontFamily="Muli"
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
        as={motion.article}
        maxW={{ base: '80%', sm: '60%', md: '40%', lg: '50%' }}
        minW={{ base: '80%', sm: '60%', md: '350px' }}
        justify="flex-end"
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      >
        <Box
          maxW={{ base: '250px', sm: '250px', md: '60%', lg: '50%' }}
          maxHeight="250px"
        >
          <Image
            src="/avatarvictor.svg"
            width={250}
            height={250}
            style={{ borderRadius: '50%' }}
            alt={
              locale === 'pt_BR'
                ? subhero.ptBR.avatarAlt
                : subhero.enUS.avatarAlt
            }
          />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Hero;
