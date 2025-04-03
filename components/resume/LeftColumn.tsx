import React from 'react';
import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { ptBR, enUS } from '../../locale/resume';

export const LeftColumn = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pt_BR' ? ptBR : enUS;

  return (
    <Box
      w={{
        base: '100%',
        md: '33%',
      }}
      bg="black"
      p={8}
      display="flex"
      flexDir="column"
      h={{
        base: 'auto',
        md: 'calc(100svh - 96px)',
      }}
      position={{
        base: 'relative',
        md: 'sticky',
      }}
      top={{
        base: '0',
        md: '24',
      }}
      left="0"
    >
      <Box>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={1} color="white">
          Victor Cardoso
        </Heading>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={6} color="white">
          Pudo Torres
        </Heading>
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="semibold"
          mb={2}
          color="light-green"
        >
          {t.jobTitle}
        </Heading>
      </Box>

      <Box mt={16}>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          color="light-green"
        >
          {t.profile.title}
        </Heading>
        <Text fontSize="sm" lineHeight="relaxed" color="white">
          {t.profile.description}
        </Text>
      </Box>

      <Box mt="auto">
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          color="light-green"
        >
          {t.contact.title}
        </Heading>
        <HStack mb={3}>
          <Text w={6} mr={3} color="light-green">
            <EmailIcon />
          </Text>
          <Text color="white">
            <a href="mailto:victor.cpt95@gmail.com">victor.cpt95@gmail.com</a>
          </Text>
        </HStack>
        <HStack mb={3}>
          <Text w={6} mr={3} color="light-green">
            <PhoneIcon />
          </Text>
          <Text color="white">
            <a
              href="https://wa.me/5511947006135"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 (11) 94700-6135
            </a>
          </Text>
        </HStack>
        <HStack mb={3}>
          <Text w={6} mr={3} color="light-green">
            in
          </Text>
          <Text color="white">
            <a
              href="https://linkedin.com/in/victorcardosopudotorres"
              target="_blank"
              rel="noopener noreferrer"
            >
              /victorcardosopudotorres
            </a>
          </Text>
        </HStack>
        <HStack mb={3}>
          <Text w={6} mr={3} color="light-green">
            gh
          </Text>
          <Text color="white">
            <a
              href="https://github.com/cptvictor95"
              target="_blank"
              rel="noopener noreferrer"
            >
              /cptvictor95
            </a>
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
