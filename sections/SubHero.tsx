import { Image } from '@chakra-ui/image';
import { Flex, List, Text } from '@chakra-ui/layout';
import { ListItem, Stack } from '@chakra-ui/react';
import React from 'react';

const SubHero: React.FC = () => {
  return (
    <Flex
      as="section"
      id="about"
      maxW={{ base: 'auto', md: '100%', lg: '100%' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['center', 'space-around', 'space-evenly', 'space-around']}
      py={8}
      px={8}
      bg="green.400"
      color="purple.900"
    >
      <Flex
        as="article"
        justify={['center', 'center', 'center', 'flex-start']}
        py={4}
      >
        <Image
          src="avatar.jpeg"
          maxW={{ base: '300px', sm: '250px', md: '300px' }}
          borderRadius="full"
        />
      </Flex>
      <Flex
        as="aside"
        maxW={{ base: '80%', sm: '60%', md: '40%', lg: '40%', xl: '30%' }}
        pt={4}
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
