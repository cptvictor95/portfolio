import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Stack, Text, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { skills } from '../locale/skills';

const Skills: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Stack as="section" id="skills" gap="12">
      <Text as="h2" textStyle="h2" textAlign="center">
        {locale === 'pt_BR' ? skills.ptBR.heading : skills.enUS.heading}
      </Text>
      <Flex
        as="section"
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-evenly' }}
      >
        <Container as="article" maxW="lg">
          <Stack px={8} py={{ base: 12, md: 0 }} textAlign="justify" gap="4">
            <Text as="h3" textStyle="h3">
              {locale === 'pt_BR'
                ? skills.ptBR.frontend.subheading
                : skills.enUS.frontend.subheading}
            </Text>
            <Text>
              {locale === 'pt_BR'
                ? skills.ptBR.frontend.content
                : skills.enUS.frontend.content}
            </Text>
          </Stack>
        </Container>
        <Container as="article" maxW="lg">
          <Stack px={8} textAlign="justify" gap="4">
            <Text as="h3" textStyle="h3">
              {locale === 'pt_BR'
                ? skills.ptBR.backend.subheading
                : skills.enUS.backend.subheading}
            </Text>
            <Text>
              {locale === 'pt_BR'
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
