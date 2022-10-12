import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Center, Flex, Link } from '@chakra-ui/react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import React from 'react';

export type NavLink = {
  name: string;
  to: string;
  id: number;
};

const MobileNavBar: React.FC<{ links: NavLink[]; isBlog: boolean }> = ({
  links,
  isBlog,
}) => {
  const [open, cycleOpen] = useCycle(false, true);
  const itemVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
    },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1,
      },
    },
  };

  const handleCycle = () => {
    cycleOpen();
  };

  return (
    <>
      <Box
        as="aside"
        display={{
          base: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        <AnimatePresence>
          {open ? (
            <IconButton
              as={motion.a}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              variants={itemVariants}
              icon={<CloseIcon />}
              onClick={handleCycle}
              aria-label="close-menu"
              variant="mobile-menu-btn"
            />
          ) : (
            <IconButton
              as={motion.a}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              variants={itemVariants}
              icon={<HamburgerIcon />}
              onClick={handleCycle}
              aria-label="open-menu"
              variant="mobile-menu-btn"
              fontSize="2xl"
            />
          )}
        </AnimatePresence>
      </Box>
      <AnimatePresence>
        {open && (
          <Center
            as={motion.aside}
            initial={{ width: 0 }}
            animate={{ width: '100vw' }}
            exit={{ width: 0, transition: { delay: 0.3, duration: 0.3 } }}
            position="fixed"
            top="10vh"
            left="0"
            py={5}
            zIndex="100"
            bg="rgba(0,0,0, 0.8)"
            display={{
              base: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
            }}
          >
            <Flex
              as={motion.div}
              w="100%"
              initial="closed"
              animate="open"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              variants={sideVariants}
              direction="column"
              alignItems="center"
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
                      title="Ir para artigos"
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
                      variants={itemVariants}
                      size="md"
                      variant="nostyle"
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
          </Center>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavBar;
