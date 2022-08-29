import { Flex, IconButton, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const VerticalBar: React.FC = () => {
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
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <Flex
      as={motion.aside}
      initial="closed"
      animate="open"
      variants={sideVariants}
      direction="column"
      justify="space-evenly"
      h="40vh"
      position="absolute"
      left="0"
      px={{ base: 4, sm: 4, md: 8, lg: 8, xl: 8 }}
    >
      <Link
        as={motion.a}
        variants={itemVariants}
        href="https://www.linkedin.com/in/victorcardosopudotorres/"
        isExternal
      >
        <IconButton
          icon={<TiSocialLinkedinCircular />}
          aria-label="Ícone Linkedin"
          title="Ir para Linkedin"
          variant="socialIcon"
          fontSize={{ base: '3xl', sm: '5xl', md: '5xl', lg: '5xl', xl: '5xl' }}
          maxH="42px"
          maxW="42px"
        />
      </Link>
      <Link
        as={motion.a}
        variants={itemVariants}
        href="https://api.whatsapp.com/send?phone=5511947006135"
        isExternal
      >
        <IconButton
          icon={<AiOutlineWhatsApp />}
          aria-label="Ícone Whatsapp"
          title="Ir para Whatsapp"
          variant="socialIcon"
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        />
      </Link>
      <Link
        as={motion.a}
        variants={itemVariants}
        href="https://github.com/cptvictor95/"
        isExternal
      >
        <IconButton
          icon={<AiFillGithub />}
          aria-label="Ícone Github"
          title="Ir para Github"
          variant="socialIcon"
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        />
      </Link>
    </Flex>
  );
};

export default VerticalBar;
