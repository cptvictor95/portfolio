import { Stack, Text, Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Project from '../components/Project';
import { assistive, gastura, labenuSystem } from '../locale/projects';

const Projects: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Stack as="section" py={16} id="projects" bg="limegreen" color="purple.900">
      <Text
        as="h1"
        fontSize="5xl"
        py={4}
        fontWeight="semibold"
        textAlign="center"
      >
        {locale === 'pt_BR' ? 'Meus Projetos' : 'My Projects'}
      </Text>

      <Project
        title="Gastura"
        content={
          locale === 'pt_BR' ? gastura.ptBR.content : gastura.enUS.content
        }
        stack="frontend"
        links={{
          production: 'https://gastura.vercel.app',
          github: {
            frontendUrl: 'https://github.com/cptvictor95/gastura',
          },
        }}
        previewImgUrl="./projects/exampleGastura.png"
      />

      <Project
        title="Labenu System"
        stack="backend"
        contentDirection="left"
        content={
          locale === 'pt_BR'
            ? labenuSystem.ptBR.content
            : labenuSystem.enUS.content
        }
        links={{
          github: {
            backendUrl:
              'https://github.com/future4code/Victor-Cardoso/tree/master/semana17/labenu-system',
          },
        }}
        previewImgUrl="./projects/exampleSystem.png"
      />

      <Project
        title="Assistive"
        stack="frontend"
        contentDirection="right"
        content={
          locale === 'pt_BR' ? assistive.ptBR.content : assistive.enUS.content
        }
        links={{
          production: 'https://assistive.com.br',
        }}
        previewImgUrl="./projects/exampleAssistive.png"
      />

      <Text
        as="h1"
        fontSize="3xl"
        py={4}
        fontWeight="semibold"
        textAlign="center"
      >
        {locale === 'pt_BR'
          ? 'Quer ver mais projetos?'
          : 'Want to see more projects?'}
      </Text>

      <Button
        as={Link}
        href="https://github.com/cptvictor95?tab=repositories"
        isExternal
        mt={16}
        size="lg"
        textTransform="uppercase"
        alignSelf="center"
        leftIcon={<AiFillGithub />}
      >
        {locale === 'pt_BR' ? 'Ir para ' : 'Go to'} github
      </Button>
    </Stack>
  );
};

export default Projects;
