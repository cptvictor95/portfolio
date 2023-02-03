import { Container, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import HorizontalBar from '../components/HorizontalBar';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { contact } from '../locale/contact';
import { useRouter } from 'next/router';

const Contact: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Flex
      as="section"
      id="contact"
      bg="black"
      w="100%"
      direction="column"
      align="center"
      gap={8}
      py={16}
    >
      <Text as="h1" fontSize="5xl" textAlign="center" fontWeight="bold">
        {locale === 'pt_BR' ? contact.ptBR.heading : contact.enUS.heading}
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
            <Text as="h2" fontSize="3xl" fontWeight="semibold">
              Freelancer
            </Text>
            <Text as="h3" fontSize="xl" fontWeight="semibold">
              {locale === 'pt_BR'
                ? contact.ptBR.freelance.subheading
                : contact.enUS.freelance.subheading}
            </Text>
            <Text fontSize="lg">
              {locale === 'pt_BR'
                ? contact.ptBR.freelance.content
                : contact.enUS.freelance.content}
            </Text>
          </Stack>
          <Stack spacing={4} maxW="300px">
            <Text as="h3" fontSize="3xl" fontWeight="semibold">
              {locale === 'pt_BR'
                ? contact.ptBR.contacts.subheading
                : contact.enUS.contacts.subheading}
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
      <Container as="section" maxW="container.lg.sm" px={8} centerContent>
        <Text>
          {locale === 'pt_BR'
            ? contact.ptBR.projectCreated
            : contact.enUS.projectCreated}
          <Link href="https://nextjs.org" isExternal>
            NextJS
          </Link>
          ,{' '}
          <Link href="https://www.typescriptlang.org" isExternal>
            Typescript
          </Link>
          ,{' '}
          <Link href="https://chakra-ui.com" isExternal>
            Chakra-UI
          </Link>{' '}
          {locale === 'pt_BR' ? 'e ' : 'and '}
          <Link href="https://graphcms.com" isExternal>
            Hygraph
          </Link>
          .
        </Text>
      </Container>
    </Flex>
  );
};

export default Contact;
