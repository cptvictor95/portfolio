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
      maxW={{ base: 'auto', md: '768px' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['center', 'space-around', 'space-around', 'space-around']}
      pb={8}
      mb={16}
    >
      <Flex as="article" align={['center', 'center', 'flex-end', 'flex-start']}>
        <Stack ml={12}>
          <Text as="h1" fontSize="6xl" fontWeight="bold">
            {title}
          </Text>
          <Text as="h3" fontSize="2xl">
            {subtitle}
          </Text>
          <Text>{ctaText}</Text>
        </Stack>
      </Flex>
      <Stack
        as="article"
        align={['center', 'center', 'flex-start', 'flex-start']}
      ></Stack>
    </Flex>
  );
};

export default Hero;
