import { Image } from '@chakra-ui/image';
import { Flex, List, Text } from '@chakra-ui/layout';
import { ListItem, Stack } from '@chakra-ui/react';
import React from 'react';

const SubHero: React.FC = () => {
  return (
    <Flex
      as="section"
      maxW={{ base: 'auto', md: '100%', lg: '100%' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['center', 'space-around', 'space-around', 'space-around']}
      py={16}
      my={8}
      bg="green.400"
      color="purple.900"
    >
      <Flex as="article" justify={['center', 'center', 'center', 'flex-start']}>
        <Image src="avatar.jpeg" maxH="300px" borderRadius="full" />
      </Flex>
      <Flex
        as="aside"
        maxW={{ base: '50%', md: '40%', lg: '40%', xl: '40%' }}
        align={['center', 'center', 'space-between', 'space-between']}
      >
        <Stack px={8}>
          <Text as="h2" fontSize="4xl" fontWeight="semibold">
            Sobre mim
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cupiditate quis nostrum tempora, aliquam quibusdam alias. Sequi
            explicabo rem cupiditate.
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SubHero;
