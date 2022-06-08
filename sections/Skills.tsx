import { Flex } from '@chakra-ui/layout';
import { Link, Stack, Text, Container } from '@chakra-ui/react';
import React from 'react';

const Skills: React.FC = () => {
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
        direction={{ base: 'column', md: 'row' }}
        justify={['center', 'space-evenly', 'space-evenly', 'space-evenly']}
        px={4}
        pb={12}
      >
        <Container as="article" maxW="md">
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
        </Container>
        <Container as="article" maxW="md">
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
              </Link>{' '}
              e integração com CMS Headless como <Link>Strapi</Link> e{' '}
              <Link>GraphCMS</Link>.
            </Text>
            <Text>
              Toda a estrutura de código é realizada utilizando os princípios
              Clean Code e/ou SOLID. Podendo também ser implementados testes
              automatizados com o framework{' '}
              <Link href="https://jestjs.io/pt-BR/" isExternal>
                Jest
              </Link>
              .
            </Text>
          </Stack>
        </Container>
      </Flex>
    </Stack>
  );
};

export default Skills;
