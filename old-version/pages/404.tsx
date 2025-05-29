import { Button, Center, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Main from '../layouts/Main';

const Custom404: React.FC = () => {
  const router = useRouter();

  const goHome = () => {
    return router.push('/');
  };
  const goBack = () => {
    return router.back();
  };
  return (
    <Main title="Página não encontrada">
      <Center as="article" h="100vh" w="100vw">
        <Flex as="section" direction="column">
          <Text as="h2" fontSize="6xl" textAlign="center" py={8}>
            Ops!
          </Text>
          <Text as="h4" fontSize="xl" py={4}>
            A página que você tentou acessar não existe.
          </Text>
          <Flex as="nav" gap={5} w="100%" justify="flex-end">
            <Button variant="link" onClick={goBack} alignSelf="flex-end">
              Voltar
            </Button>
            <Button variant="link" onClick={goHome} alignSelf="flex-end">
              Página inicial
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Main>
  );
};

export default Custom404;
