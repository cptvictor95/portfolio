import { Container, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import HorizontalBar from '../components/HorizontalBar';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <Flex
      as="section"
      id="contact"
      bg="black"
      w="100%"
      direction="column"
      align="center"
      gap={8}
    >
      <Text as="h1" fontSize="5xl" textAlign="center" pt={8} fontWeight="bold">
        Fale comigo!
      </Text>

      <Container
        as="section"
        maxW="container.md"
        h="max-content"
        centerContent
        px={8}
      >
        <Flex
          w="100%"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 8 }}
          justify="space-between"
          align="center"
        >
          <Stack spacing={4} maxW="300px">
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
          <Stack spacing={4} maxW="300px">
            <Text as="h3" fontSize="3xl" fontWeight="semibold">
              Contatos adicionais
            </Text>

            <Flex align="center">
              <Icon
                as={HiOutlineMail}
                aria-label="email"
                fontSize="2xl"
                mr={2}
                my="auto"
              />
              <Link href="mailto:cpt.victor@hotmail.com">
                cpt.victor@hotmail.com
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={FiPhone} aria-label="phone" fontSize="2xl" mr={2} />
              <Link href="tel:+5511947006135">(11) 94700-6135</Link>
            </Flex>
          </Stack>
        </Flex>
      </Container>

      <HorizontalBar />
      <Footer />
    </Flex>
  );
};

export default Contact;
