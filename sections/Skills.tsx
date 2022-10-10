import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Stack, Text, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { skills } from '../locale/skills';

const Skills: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Stack as="section" py={20} id="skills">
      <Text as="h1" fontSize="5xl" textAlign="center">
        {locale === 'pt-BR' ? skills.ptBR.heading : skills.enUS.heading}
      </Text>
      <Flex
        as="section"
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-evenly' }}
        pt={{ base: 0, md: 12 }}
      >
        <Container as="article" maxW="lg">
          <Stack px={8} py={{ base: 12, md: 0 }} textAlign="justify">
            <Text as="h2" fontSize="4xl" fontWeight="semibold">
              {locale === 'pt-BR'
                ? skills.ptBR.frontend.subheading
                : skills.enUS.frontend.subheading}
            </Text>
            <Text>
              {locale === 'pt-BR'
                ? skills.ptBR.frontend.content
                : skills.enUS.frontend.content}
            </Text>
          </Stack>
        </Container>
        <Container as="article" maxW="lg">
          <Stack px={8} textAlign="justify">
            <Text as="h2" fontSize="4xl" fontWeight="semibold">
              {locale === 'pt-BR'
                ? skills.ptBR.backend.subheading
                : skills.enUS.backend.subheading}
            </Text>
            <Text>
              {locale === 'pt-BR'
                ? skills.ptBR.backend.content
                : skills.enUS.backend.content}
            </Text>
          </Stack>
        </Container>
      </Flex>
    </Stack>
  );
};

export default Skills;
