import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import MobileNavBar, { NavLink } from './MobileNavBar';
import { AnimatePresence, motion } from 'framer-motion';

const Header: React.FC = (props) => {
  const router = useRouter();
  const isBlog = router.pathname.includes('/blog');
  let links: NavLink[] = [];

  if (isBlog) {
    links = [
      { name: 'home', to: '', id: 5 },
      { name: 'artigos', to: 'blog', id: 6 },
    ];
  } else {
    links = [
      { name: 'sobre', to: 'about', id: 1 },
      { name: 'projetos', to: 'projects', id: 2 },
      { name: 'contato', to: 'contact', id: 3 },
      { name: 'artigos', to: 'blog', id: 4 },
    ];
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
      bg="rgba(0,0,0, 0.8)"
      py={4}
      px={8}
      zIndex="1"
      {...props}
    >
      <Flex align="center" flexGrow={1}>
        <Text
          as={motion.p}
          fontSize="2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Victor
        </Text>
      </Flex>

      <MobileNavBar links={links} isBlog={isBlog} />
      <AnimatePresence>
        <Box
          as={motion.nav}
          initial="closed"
          animate="open"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          display={{
            base: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Flex
            align={['center', 'center', 'center', 'center']}
            w="100%"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            gap={5}
          >
            {links.map((link) => {
              if (link.name === 'artigos') {
                return (
                  <Link
                    as={motion.a}
                    key={link.id}
                    href="/blog"
                    size="md"
                    variant="nostyle"
                    variants={itemVariants}
                    title="Ir para artigos"
                  >
                    Artigos
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
                    title={`Ir para ${link.name}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    as={motion.a}
                    key={link.id}
                    href={`#${link.to}`}
                    size="md"
                    variant="nostyle"
                    variants={itemVariants}
                    title={`Ir para ${link.name}`}
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
