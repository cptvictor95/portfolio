import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Center, Flex, Link } from '@chakra-ui/react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { NavLink } from '../interface/NavLink';

const MobileNavBar: React.FC<{ links: NavLink[]; isBlog: boolean }> = ({
  links,
  isBlog,
}) => {
  const router = useRouter();
  const { locale } = router;
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
          md: 'none',
        }}
      >
        <AnimatePresence>
          {open ? (
            <IconButton
              as={motion.button}
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
              as={motion.button}
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
              sm: 'block',
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
                      title={
                        locale === 'pt_BR' ? 'Ir para artigos' : 'Go to blog'
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
                      variants={itemVariants}
                      size="md"
                      variant="nostyle"
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
                      href={link.to === 'resume' ? '/resume' : `#${link.to}`}
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
          </Center>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavBar;
