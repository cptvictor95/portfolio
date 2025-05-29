import { Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Project from '../components/Project';
import { assistive, gastura, labenuSystem } from '../locale/projects';

const Projects: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Stack as="section" id="projects" gap={8}>
      <Text as="h2" textStyle="h2" textAlign="center">
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
        previewImgUrl="/projects/exampleGastura.png"
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
        previewImgUrl="/projects/exampleSystem.png"
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
        previewImgUrl="/projects/exampleAssistive.png"
      />
    </Stack>
  );
};

export default Projects;
