import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import MobileNavBar from './MobileNavBar';
import { AnimatePresence, motion } from 'motion/react';
import { ptBR, enUS } from '../locale/header';
import { NavLink } from '../interface/NavLink';

const Header: React.FC = (props) => {
  const router = useRouter();
  const { locale } = router;
  const isBlog = router.pathname.includes('/blog');
  const isResume = router.pathname.includes('/resume');
  let links: NavLink[] = [];

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

  if (isBlog) {
    links = locale === 'pt_BR' ? ptBR.blogLinks : enUS.blogLinks;
  } else {
    links = locale === 'pt_BR' ? ptBR.homeLinks : enUS.homeLinks;
  }

  const itemVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
    },
  };

  return (
    <Flex
      as="header"
      w="100%"
      h="10vh"
      position="sticky"
      top="0"
      align="center"
      wrap="wrap"
      bg="black"
      py={4}
      px={8}
      zIndex="1"
      {...props}
    >
      <Flex align="center" flexGrow={1}>
        <Text
          as={motion.a}
          textStyle="h3"
          fontFamily="Barlow"
          fontWeight="regular"
          letterSpacing="wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          href="https://www.cptvictor.dev"
        >
          PUDO
        </Text>
      </Flex>

      <Button
        variant="scrollToTop"
        onClick={handleToggle}
        position="absolute"
        top="12vh"
        right="6"
        textShadow="outline"
        size={{ base: 'xs', md: 'sm' }}
        fontSize="sm"
      >
        {locale === 'pt_BR' ? 'pt-BR' : 'en-US'}
      </Button>

      <MobileNavBar links={links} isBlog={isBlog} />
      <AnimatePresence>
        <Box
          as={motion.nav}
          initial="closed"
          animate="open"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          display={{
            base: 'none',
            md: 'block',
          }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Flex
            w="100%"
            direction={{ base: 'column', sm: 'row' }}
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            align="center"
            gap={5}
          >
            {links.map((link) => {
              if (link.to === 'blog') {
                return (
                  <Link
                    as={motion.a}
                    key={link.id}
                    href="/blog"
                    size="md"
                    variant="nostyle"
                    variants={itemVariants}
                    title={
                      locale === 'pt_BR' ? 'Ir para artigos' : 'Go to blog'
                    }
                  >
                    {link.name}
                  </Link>
                );
              } else if (link.to === 'resume') {
                return (
                  <Link
                    as={motion.a}
                    key={link.id}
                    href="/resume"
                    size="md"
                    variant="nostyle"
                    variants={itemVariants}
                    title={
                      locale === 'pt_BR' ? 'Ir para currículo' : 'Go to resume'
                    }
                  >
                    {link.name}
                  </Link>
                );
              } else {
                return isBlog ? (
                  <Link
                    as={motion.a}
                    key={link.id}
                    href="/"
                    size="md"
                    variant="nostyle"
                    variants={itemVariants}
                    title={
                      locale === 'pt_BR'
                        ? `Ir para ${link.name}`
                        : `Go to ${link.name}`
                    }
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    as={motion.a}
                    key={link.id}
                    href={isResume ? `/#${link.to}` : `#${link.to}`}
                    size="md"
                    variant="nostyle"
                    variants={itemVariants}
                    title={
                      locale === 'pt_BR'
                        ? `Ir para ${link.name}`
                        : `Go to ${link.name}`
                    }
                  >
                    {link.name}
                  </Link>
                );
              }
            })}
          </Flex>
        </Box>
      </AnimatePresence>
    </Flex>
  );
};

export default Header;
