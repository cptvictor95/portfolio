import { Flex } from '@chakra-ui/layout';
import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Skills = () => {
  return (
    <Stack as="section" py={8}>
      <Text as="h1" fontSize="4xl" textAlign="center" pt={8}>
        Minhas habilidades
      </Text>
      <Flex
        as="section"
        maxW={{ base: 'auto', md: '100%', lg: '100%', xl: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'space-evenly', 'space-evenly', 'space-evenly']}
        py={8}
      >
        <Flex
          as="article"
          maxW={{ base: '80%', sm: '60%', md: '40%', lg: '30%', xl: '30%' }}
          py={4}
        >
          <Stack px={8}>
            <Text as="h2" fontSize="5xl" fontWeight="semibold">
              Front-end
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              cupiditate quis nostrum tempora, aliquam quibusdam alias. Sequi
              explicabo rem cupiditate.
            </Text>
          </Stack>
        </Flex>
        <Flex
          as="article"
          maxW={{ base: '80%', sm: '60%', md: '40%', lg: '30%', xl: '30%' }}
          py={8}
        >
          <Stack px={8}>
            <Text as="h2" fontSize="5xl" fontWeight="semibold">
              Back-end
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              cupiditate quis nostrum tempora, aliquam quibusdam alias. Sequi
              explicabo rem cupiditate.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Skills;
