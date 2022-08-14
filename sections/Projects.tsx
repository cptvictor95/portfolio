import { Stack, Text, Button, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Project from '../components/Project';

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

      <Project
        title="Gastura"
        content="Este projeto foi planejado para ser lançado em versões pequenas, com o intuito de ensinar programação a um amigo meu ao mesmo tempo em que crio uma maneira autêntica de controlar meu dinheiro, podendo criar mais consciência sobre meus próprios gastos e recebimentos mensais, sendo eles fixos ou variantes. A primeira versão foi construída em maioria por mim, e a segunda versão foi planejada para ser entregue ao meu amigo e para que ele consiga desenvolver autonomia e ter responsabilidade sobre um projeto, e que já possui um cliente real. A tech-stack utilizada foi NextJS, Firebase e Firestore e hospedado na plataforma da Vercel."
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
        content="Projeto realizado durante o curso Labenu, feito com intuito de treinar
          lógica de programação e criação de APIs com TypeScript e SQL,
          utilizando os frameworks ExpressJS e Knex. O projeto foi documentado
          inteiramente por mim em Markdown Language e padronizado de maneira
          concisa levando em conta a complexidade necessária para atingir os
          requisitos mínimos de entrega do projeto. Ao todo foram criados 16
          endpoints ao longo do projeto."
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
        content="Projeto freelance realizado para a empresa Assistive, feito com WordPress utilizando o tema Enfold. Este projeto foi realizado com o intuito de conhecer melhor a plataforma WordPress e aprofundar meus conhecimentos em SEO e acessibilidade."
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
        Se interessou e quer ver mais?
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
        Ir para github
      </Button>
    </Stack>
  );
};

export default Projects;
