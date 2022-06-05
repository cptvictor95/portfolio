import { Stack, Text, Flex, Button, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Projects: React.FC = () => {
  return (
    <Stack as="section" py={16} id="projects" bg="limegreen" color="purple.900">
      <Text
        as="h1"
        fontSize="5xl"
        py={4}
        fontWeight="semibold"
        textAlign="center"
      >
        Meus Projetos
      </Text>
      <Flex
        as="section"
        maxW={{ base: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'center', 'center', 'center']}
        py={{ base: 8 }}
      >
        <Flex
          as="aside"
          maxW={{ base: '100%', md: '50%', lg: '50%' }}
          justify="flex-end"
          px={8}
        >
          <Link
            href="./projects/exampleBrav.png"
            isExternal
            px={{ base: 0, sm: 8, md: 4 }}
          >
            <Image
              src={'./projects/exampleBrav.png'}
              maxW={{ base: '100%', lg: '350px' }}
              alt="Screenshot do projeto BRAV"
            />
            <Text>Clique na imagem para ampliar</Text>
          </Link>
        </Flex>
        <Flex as="article" maxW={{ base: 'auto' }}>
          <Stack px={8}>
            <Text as="h2" fontSize="4xl" fontWeight="bold" pt={4}>
              BRAV
            </Text>
            <Text as="h4" fontSize="2xl" m={0} fontWeight="semibold">
              Full Stack
            </Text>
            <Text maxW="350px" textAlign="justify">
              Projeto pessoal realizado a fins de estudo da stack NextJS +
              MongoDB utilizando Typescript, com o intuito de catalogar
              exercícios de calistenia e yoga realizados por mim na minha rotina
              de cuidado físico e mental. O projeto ainda não foi hospedado pois
              está em desenvolvimento em fase inicial.
            </Text>
            <Flex minW="100%" justifyContent="space-between">
              <Link
                href="https://github.com/cptvictor95/brav/tree/main/frontend"
                isExternal
                variant="nostyle"
              >
                <Button variant="outline" leftIcon={<AiFillGithub />}>
                  Front-End
                </Button>
              </Link>
              <Link
                href="https://github.com/cptvictor95/brav/tree/main/backend"
                isExternal
                variant="nostyle"
              >
                <Button variant="outline" leftIcon={<AiFillGithub />}>
                  Back-End
                </Button>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        as="section"
        maxW={{ base: '100%' }}
        direction={{
          base: 'column-reverse',
          sm: 'column-reverse',
          md: 'row',
          lg: 'row',
        }}
        align="center"
        justify={['center', 'center', 'center', 'center']}
        py={{ base: 4, sm: 4, md: 4 }}
      >
        <Stack px={8} align="flex-end">
          <Text as="h2" fontSize="4xl" fontWeight="bold" pt={4}>
            Labenu System
          </Text>
          <Text as="h4" fontSize="2xl" m={0} fontWeight="semibold">
            Back-end
          </Text>
          <Text maxW="350px" textAlign="justify">
            Projeto realizado durante o curso Labenu, feito com intuito de
            treinar lógica de programação e criação de APIs com TypeScript e
            SQL, utilizando frameworks ExpressJS e Knex. O projeto foi
            documentado inteiramente por mim em Markdown Language e padronizado
            de maneira concisa baseado com a complexidade necessária para
            atingir os requisitos mínimos pedidos no projeto. Ao todo foram
            criados 16 endpoints ao longo do projeto.
          </Text>

          <Link
            href="https://github.com/future4code/Victor-Cardoso/tree/master/semana17/labenu-system"
            isExternal
            variant="nostyle"
          >
            <Button
              variant="outline"
              alignSelf="flex-end"
              leftIcon={<AiFillGithub />}
            >
              Ver Projeto
            </Button>
          </Link>
        </Stack>
        <Flex
          as="aside"
          maxW={{ base: '100%', md: '50%', lg: '50%' }}
          justify="flex-start"
          px={8}
        >
          <Link
            href="./projects/exampleSystem.png"
            isExternal
            px={{ base: 0, sm: 8, md: 4 }}
          >
            <Image
              src={'./projects/exampleSystem.png'}
              maxW={{ base: '100%', lg: '350px' }}
              alt="Screenshot do projeto Labenu System"
            />
            <Text>Clique na imagem para ampliar</Text>
          </Link>
        </Flex>
      </Flex>
      <Flex
        as="section"
        maxW={{ base: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'center', 'center', 'center']}
        py={{ base: 8 }}
      >
        <Flex
          as="aside"
          maxW={{ base: '100%', md: '50%', lg: '50%' }}
          justify="flex-end"
          px={8}
        >
          <Link
            href="./projects/exampleSkibiddy.png"
            isExternal
            px={{ base: 0, sm: 8, md: 4 }}
          >
            <Image
              src={'./projects/exampleSkibiddy.png'}
              maxW={{ base: '100%', lg: '350px' }}
              alt="Screenshot do projeto Skibiddy"
            />
            <Text>Clique na imagem para ampliar</Text>
          </Link>
        </Flex>
        <Flex as="article" maxW={{ base: 'auto' }}>
          <Stack px={8}>
            <Text as="h2" fontSize="4xl" fontWeight="bold" pt={4}>
              Skibiddy
            </Text>
            <Text as="h4" fontSize="2xl" m={0} fontWeight="semibold">
              Full Stack
            </Text>
            <Text maxW="350px" textAlign="justify">
              Projeto final do curso feito com o intuito de replicar uma
              plataforma para publicação de músicas autorais e desenvolvido com
              ReactJS puro com TypeScript tanto no front-end como no back-end e
              MySQL, também foram criados testes automatizados em toda a parte
              de autenticação e autorização do back-end com Jest. Você pode
              encontrar o back-end para testes hospedado na EC2-AWS{' '}
              <Link
                href="https://ec2-34-234-95-127.compute-1.amazonaws.com:3002"
                isExternal
                fontWeight="bold"
              >
                neste link
              </Link>
              .
            </Text>
            <Flex minW="100%" justifyContent="space-between">
              <Link
                href="https://github.com/cptvictor95/skibiddy-front"
                isExternal
                variant="nostyle"
              >
                <Button variant="outline" leftIcon={<AiFillGithub />}>
                  Front-End
                </Button>
              </Link>
              <Link
                href="https://github.com/cptvictor95/skibiddy-back"
                isExternal
                variant="nostyle"
              >
                <Button variant="outline" leftIcon={<AiFillGithub />}>
                  Back-End
                </Button>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Link
        href="https://github.com/cptvictor95?tab=repositories"
        isExternal
        variant="nostyle"
        alignSelf="center"
      >
        <Button
          mt={16}
          size="lg"
          textTransform="uppercase"
          leftIcon={<AiFillGithub />}
        >
          ver mais projetos
        </Button>
      </Link>
    </Stack>
  );
};

export default Projects;
