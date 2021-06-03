import { Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import HorizontalBar from '../components/HorizontalBar';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <Stack as="section" id="contact" bg="black">
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
            <Link href="mailto:cpt.victor@hotmail.com">
              <Icon
                as={HiOutlineMail}
                aria-label="email"
                fontSize="2xl"
                mr={2}
              />
              cpt.victor@hotmail.com
            </Link>
            <Link href="tel:+5511947006135">
              <Icon as={FiPhone} aria-label="phone" fontSize="2xl" mr={2} />
              (11) 94700-6135
            </Link>
          </Stack>
        </Flex>
      </Flex>
      <HorizontalBar />
      <Footer />
    </Stack>
  );
};

export default Contact;
