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
      minH="70vh"
      maxW={{ base: 'auto', lg: '768px', xl: '1280px' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={{ base: 'center', md: 'left', xl: 'left' }}
      px={{ base: 4, md: 20, lg: 24, xl: 32 }}
      mb={8}
    >
      <Stack
        as="article"
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Text as="h1" fontSize="6xl" fontWeight="bold">
          {title}
        </Text>
        <Text as="h3" fontSize="2xl">
          {subtitle}
        </Text>
        <Text>{ctaText}</Text>
      </Stack>
    </Flex>
  );
};

export default Hero;
