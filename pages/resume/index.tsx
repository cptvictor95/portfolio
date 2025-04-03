import React from 'react';
import { Flex, Button, Box } from '@chakra-ui/react';
import { LeftColumn } from '../../components/resume/LeftColumn';
import { RightColumn } from '../../components/resume/RightColumn';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const ResumePage = () => {
  const router = useRouter();
  const { locale } = router;

  const handleToggle = () => {
    switch (locale) {
      case 'pt_BR':
        router.push(router.asPath, router.asPath, { locale: 'en_US' });
        break;
      case 'en_US':
        router.push(router.asPath, router.asPath, { locale: 'pt_BR' });
        break;
    }
  };

  return (
    <>
      <Header />
      <Flex
        w="full"
        flexDir={{
          base: 'column',
          md: 'row',
        }}
        minH={{
          base: 'auto',
          md: '100vh',
        }}
        bg="black"
        position="relative"
      >
        <Button
          variant="scrollToTop"
          onClick={handleToggle}
          position="fixed"
          top="12vh"
          right="6"
          textShadow="outline"
          size={{ base: 'xs', md: 'sm' }}
          fontSize="sm"
          zIndex="10"
        >
          {locale === 'pt_BR' ? 'pt-BR' : 'en-US'}
        </Button>

        <LeftColumn />
        <RightColumn />
      </Flex>
    </>
  );
};

export default ResumePage;
