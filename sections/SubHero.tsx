import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

const SubHero: React.FC = () => {
  return (
    <Flex
      as="section"
      maxW={{ base: 'auto', md: '768px', lg: '1024px', xl: '1280px' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['center', 'space-around', 'space-around', 'space-around']}
      py={24}
      my={8}
      bg="purple.600"
    >
      <Flex as="article" justify={['center', 'center', 'center', 'flex-start']}>
        <Image src="avatar.jpeg" maxH="200px" borderRadius="full" />
      </Flex>
      <Flex
        as="aside"
        direction="column"
        maxW="300px"
        align={['center', 'center', 'center', 'flex-start']}
      >
        <Text as="h2" fontSize="4xl" fontWeight="semibold">
          Sobre mim
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          cupiditate quis nostrum tempora, aliquam quibusdam alias. Sequi
          explicabo rem cupiditate.
        </Text>
      </Flex>
    </Flex>
  );
};

export default SubHero;
