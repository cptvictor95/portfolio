import { Flex } from '@chakra-ui/layout';
import { Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Skills = () => {
  return (
    <Stack as="section" py={16} id="skills">
      <Text
        as="h1"
        fontSize={{ base: '5xl', md: '5xl', lg: '5xl', xl: '5xl' }}
        textAlign="center"
        py={8}
      >
        Habilidades
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
            <Text as="h2" fontSize="4xl" fontWeight="semibold">
              Front-end
            </Text>
            <Text>
              Desenvolvimento de aplicações web com HTML, CSS, JavaScript e
              TypeScript.
            </Text>
            <Text>
              Atualmente trabalho com a biblioteca{' '}
              <Link href="https://reactjs.org" isExternal>
                ReactJS
              </Link>
              , mais especificamente utilizando o framework{' '}
              <Link href="https://nextjs.org" isExternal>
                NextJS
              </Link>
              , em conjunto com a linguagem{' '}
              <Link href="https://www.typescriptlang.org" isExternal>
                Typescript
              </Link>{' '}
              e a biblioteca de componentes{' '}
              <Link href="https://chakra-ui.com" isExternal>
                Chakra-UI
              </Link>
              .
            </Text>
            <Text>
              Toda a parte gráfica e componentização desenvolvidas por mim são
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
            <Text as="h2" fontSize="4xl" fontWeight="semibold">
              Back-end
            </Text>
            <Text>
              Desenvolvimento de APIs utilizando{' '}
              <Link href="https://nodejs.org/en/" isExternal>
                NodeJS
              </Link>
              ,{' '}
              <Link href="https://www.typescriptlang.org" isExternal>
                Typescript
              </Link>{' '}
              e{' '}
              <Link href="https://www.mysql.com" isExternal>
                MySQL
              </Link>{' '}
              ou{' '}
              <Link href="https://www.mongodb.com" isExternal>
                MongoDB
              </Link>
              .
            </Text>
            <Text>
              Também possuo conhecimento em{' '}
              <Link href="https://firebase.google.com" isExternal>
                Firebase
              </Link>
              , mais especificamente na stack{' '}
              <Link href="https://nextjs.org" isExternal>
                NextJS
              </Link>{' '}
              +{' '}
              <Link
                href="https://firebase.google.com/docs/firestore"
                isExternal
              >
                Firestore
              </Link>
            </Text>
            <Text>
              Toda a estrutura de código é realizada utilizando os princípios
              Clean Code e/ou SOLID. Também possuo conhecimento em testes
              automatizados com o framework{' '}
              <Link href="https://jestjs.io/pt-BR/" isExternal>
                Jest
              </Link>
              .
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Skills;
