import { Flex } from '@chakra-ui/layout';
import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Skills = () => {
  return (
    <Stack as="section" py={8} id="skills">
      <Text
        as="h1"
        fontSize={{ base: '3xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        textAlign="center"
        pt={8}
        py={4}
      >
        Minhas habilidades
      </Text>
      <Flex
        as="section"
        maxW={{ base: '100%', md: '100%', lg: '100%', xl: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="flex-start"
        justify={['center', 'space-evenly', 'space-evenly', 'space-evenly']}
        px={4}
      >
        <Flex
          as="article"
          maxW={{ base: '100%', sm: '60%', md: '40%', lg: '30%', xl: '30%' }}
          pb={8}
        >
          <Stack px={8} textAlign="justify">
            <Text as="h2" fontSize="5xl" fontWeight="semibold">
              Front-end
            </Text>
            <Text>
              Desenvolvimento de aplicações web com HTML, CSS e JavaScript.
            </Text>
            <Text>
              Atualmente trabalho com a biblioteca ReactJS, mais especificamente
              utilizando o framework NextJS, em conjunto com a linguagem
              TypeScript.
            </Text>
            <Text>
              Toda a parte gráfica e componentização desenvolvida por mim são
              realizadas utilizando o princípio Mobile First, com responsividade
              para todos os tamanhos de dispositivos.
            </Text>
          </Stack>
        </Flex>
        <Flex
          as="article"
          maxW={{ base: '100%', sm: '60%', md: '40%', lg: '30%', xl: '30%' }}
          pb={8}
        >
          <Stack px={8} textAlign="justify">
            <Text as="h2" fontSize="5xl" fontWeight="semibold">
              Back-end
            </Text>
            <Text>
              Desenvolvimento de APIs utilizando NodeJS, TypeScript e MySQL /
              MongoDB.
            </Text>
            <Text>
              Também possuo conhecimento em Firebase, mais especificamente na
              stack NextJS + Firestore
            </Text>
            <Text>
              Toda a estrutura de código é realizada utilizando os princípios
              Clean Code e/ou SOLID. Também possuo conhecimento em testes
              automatizados com o framework Jest.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Skills;
