import { Flex, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const VerticalBar = () => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      h="40vh"
      position="absolute"
      left="0"
      px={{ base: 4, sm: 4, md: 8, lg: 8, xl: 8 }}
    >
      <Link
        href="https://www.linkedin.com/in/victorcardosopudotorres/"
        isExternal
      >
        <IconButton
          icon={<TiSocialLinkedinCircular />}
          aria-label="linkedin"
          colorScheme="black"
          fontSize={{ base: '3xl', sm: '5xl', md: '5xl', lg: '5xl', xl: '5xl' }}
          maxH="42px"
          maxW="42px"
        />
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=5511947006135" isExternal>
        <IconButton
          icon={<AiOutlineWhatsApp />}
          aria-label="whatsapp"
          colorScheme="black"
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        />
      </Link>
      <Link href="https://github.com/cptvictor95/" isExternal>
        <IconButton
          icon={<AiFillGithub />}
          aria-label="github"
          colorScheme="black"
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        />
      </Link>
      <Link
        href="https://www.facebook.com/victor.cardosopudotorres/"
        isExternal
      >
        <IconButton
          icon={<FaFacebook />}
          aria-label="facebook"
          colorScheme="black"
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        />
      </Link>
      <Link href="https://www.instagram.com/v1cardoso/" isExternal>
        <IconButton
          icon={<FiInstagram />}
          aria-label="instagram"
          colorScheme="black"
          fontSize={{ base: '2xl', sm: '4xl', md: '4xl', lg: '4xl', xl: '4xl' }}
        />
      </Link>
    </Flex>
  );
};

export default VerticalBar;