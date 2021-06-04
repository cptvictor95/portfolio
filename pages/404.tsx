import { Center, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Main from '../layouts/Main';

const Custom404: React.FC = () => {
  const router = useRouter();

  const goHome = () => {
    return router.push('/');
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
          <Button variant="solid" onClick={goHome} alignSelf="flex-end">
            Voltar
          </Button>
        </Flex>
      </Center>
    </Main>
  );
};

export default Custom404;
