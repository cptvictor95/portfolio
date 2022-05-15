import { Container, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import HorizontalBar from '../components/HorizontalBar';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <Stack as="section" id="contact" bg="black" justifyContent="center">
      <Text as="h1" fontSize="5xl" textAlign="center" pt={8} fontWeight="bold">
        Contatos
      </Text>
      <Flex
        as="section"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'space-evenly', 'space-evenly', 'space-evenly']}
        py={4}
      >
        <Container as="article" maxW="md" minH="200px">
          <Stack px={8}>
            <Text as="h3" fontSize="3xl" fontWeight="semibold">
              Freelancer
            </Text>
            <Text as="h4" fontSize="xl" fontWeight="semibold">
              Quer trabalhar comigo?
            </Text>
            <Text fontSize="lg">
              Me mande um email com sua proposta e entrarei em contato para
              conversarmos!
            </Text>
          </Stack>
        </Container>
        <Container as="article" maxW="md" minH="200px">
          <Stack px={8}>
            <Text as="h3" fontSize="3xl" fontWeight="semibold">
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
        </Container>
      </Flex>
      <HorizontalBar />
      <Footer />
    </Stack>
  );
};

export default Contact;
