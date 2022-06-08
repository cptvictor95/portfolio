import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link as SLink } from 'react-scroll';
import { useRouter } from 'next/dist/client/router';
import MobileNavBar, { NavLink } from './MobileNavBar';
import { motion } from 'framer-motion';

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
      align="center"
      position={{ base: 'fixed', sm: 'fixed' }}
      top={{ md: 0, lg: 0, xl: 0 }}
      bg="rgba(0,0,0, 0.8)"
      wrap="wrap"
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
      <Box
        as="nav"
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
                <Button
                  key={link.id}
                  onClick={() => router.push('/blog')}
                  size="md"
                  variant="link"
                  title="Ir para Artigos"
                >
                  Artigos
                </Button>
              );
            } else {
              return isBlog ? (
                <Button
                  as={motion.button}
                  key={link.id}
                  onClick={() => router.push('/')}
                  variants={itemVariants}
                  size="md"
                  variant="link"
                  title={`Ir para ${link.name}`}
                >
                  {link.name}
                </Button>
              ) : (
                <SLink
                  activeClass="active"
                  key={link.id}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Button
                    as={motion.button}
                    variants={itemVariants}
                    size="md"
                    variant="link"
                    title={`Ir para ${link.name}`}
                  >
                    {link.name}
                  </Button>
                </SLink>
              );
            }
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
