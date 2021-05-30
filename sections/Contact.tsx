import { Center, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram, FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Contact = () => {
  return (
    <Stack as="section" id="contact" bg="green.900">
      <Text as="h1" fontSize="5xl" textAlign="center" pt={8} fontWeight="bold">
        Contatos
      </Text>
      <Flex
        as="section"
        maxW={{ base: 'auto', md: '100%', lg: '100%', xl: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'space-evenly', 'space-evenly', 'space-evenly']}
        py={4}
      >
        <Flex
          as="article"
          maxW={{ base: '80%', sm: '60%', md: '40%', lg: '30%', xl: '30%' }}
        >
          <Stack px={8}>
            <Text as="h2" fontSize="3xl" fontWeight="semibold">
              Freelancer
            </Text>
            <Text as="h2" fontSize="xl" fontWeight="semibold">
              Quer trabalhar comigo?
            </Text>
            <Text as="h2" fontSize="lg">
              Me mande um email com sua proposta e entrarei em contato para
              conversarmos!
            </Text>
          </Stack>
        </Flex>
        <Flex
          as="article"
          maxW={{ base: '80%', sm: '60%', md: '40%', lg: '30%', xl: '30%' }}
          py={8}
        >
          <Stack px={8}>
            <Text as="h2" fontSize="3xl" fontWeight="semibold">
              Contatos adicionais
            </Text>
            <Text>
              <IconButton
                icon={<HiOutlineMail />}
                aria-label="email"
                colorScheme="black"
                fontSize="2xl"
              />
              cpt.victor@hotmail.com
            </Text>
            <Text>
              <IconButton
                icon={<FiPhone />}
                aria-label="phone"
                colorScheme="black"
                fontSize="2xl"
              />
              (11) 94700-6135
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Center py={8}>
        <Flex w="30vw" justify="space-around">
          <IconButton
            icon={<TiSocialLinkedinCircular />}
            aria-label="linkedin"
            colorScheme="black"
            fontSize="5xl"
          />
          <IconButton
            icon={<AiOutlineWhatsApp />}
            aria-label="whatsapp"
            colorScheme="black"
            fontSize="4xl"
          />
          <IconButton
            icon={<AiFillGithub />}
            aria-label="github"
            colorScheme="black"
            fontSize="4xl"
          />

          <IconButton
            icon={<FaFacebook />}
            aria-label="facebook"
            colorScheme="black"
            fontSize="4xl"
          />
          <IconButton
            icon={<FiInstagram />}
            aria-label="instagram"
            colorScheme="black"
            fontSize="4xl"
          />
        </Flex>
      </Center>
      <Flex p={8} bg="purple.900">
        <Text>
          © 2021 Victor Cardoso Pudo Torres - Todos os direitos reservados
        </Text>
      </Flex>
    </Stack>
  );
};

export default Contact;
