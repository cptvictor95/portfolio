import { Image } from '@chakra-ui/image';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

const Hero: React.FC<{
  title: string;
  subtitle: string;
  ctaText: string;
}> = ({ title, subtitle, ctaText }) => {
  return (
    <Flex
      as="section"
      minH={{ base: '75vh', md: '70vh' }}
      maxW={{
        base: '100%',
      }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['space-evenly', 'space-around', 'space-around', 'space-evenly']}
      pb={8}
      px={8}
      mb={24}
    >
      <Flex
        as="article"
        maxW={{ base: '100%' }}
        align={['flex-start', 'center', 'center', 'center']}
      >
        <Stack ml={{ base: 0, md: 12, lg: 12, xl: 12 }}>
          <Text
            as="h1"
            fontSize={{ base: '4xl', lg: '6xl', xl: '6xl' }}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text as="h3" fontSize={{ base: 'xl', lg: '2xl', xl: '2xl' }}>
            {subtitle}
          </Text>
          <Text>{ctaText}</Text>
        </Stack>
      </Flex>
      <Stack
        as="article"
        maxW={{ base: '100%', sm: '70%', md: '60%', lg: '50%' }}
        minW={{ base: '80%', sm: '350px', md: '400px' }}
        justify={['center', 'flex-end', 'flex-end', 'flex-end']}
        align={['flex-start', 'center', 'center', 'center']}
        px={8}
      >
        <Image src={'./heroSVG.svg'} />
      </Stack>
    </Flex>
  );
};

export default Hero;
