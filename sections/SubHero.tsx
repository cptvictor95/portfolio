import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';

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
      bg="limegreen"
      color="black"
    >
      <Flex
        as="article"
        justify={['center', 'center', 'center', 'flex-start']}
        py={4}
      >
        <Image
          src="avatar.jpeg"
          maxW={{ base: '250px', sm: '250px', md: '300px' }}
          borderRadius="full"
        />
      </Flex>
      <Flex
        as="aside"
        maxW={{ base: '100%', sm: '70%', md: '40%', lg: '40%', xl: '40%' }}
        pt={4}
        align={['center', 'center', 'space-between', 'space-between']}
      >
        <Stack as="article" px={{ base: 4, md: 8, lg: 8, xl: 8 }}>
          <Text as="h2" fontSize="4xl" fontWeight="semibold">
            Sobre mim
          </Text>
          <Text pb={6} textAlign="justify">
            Fascinado pela ideia de mudar o mundo ao meu redor, escolhi a área
            da tecnologia da informação para contribuir com a evolução da
            sociedade. Acredito que posso atingir cada vez mais vidas usando a
            tecnologia ao meu favor, e trazer um pouco mais do meu amor pela
            vida para outras pessoas. Sou apaixonado por ensinar, e mais ainda
            por aprender!
          </Text>
          <Flex as="section" flexWrap="wrap">
            <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
              NodeJS
            </Text>
            <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
              JavaScript
            </Text>
            <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
              TypeScript
            </Text>
            <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
              SQL
            </Text>
            <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
              Firebase
            </Text>
            <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
              MongoDB
            </Text>
          </Flex>
          <Flex as="section" alignSelf="flex-end" pb={{ base: 8 }}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button variant="outline">Ver Contatos</Button>
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SubHero;
