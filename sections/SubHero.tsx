import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text, Link } from '@chakra-ui/layout';
import { Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import TechTag from '../components/TechTag';
import { subhero } from '../locale/subhero';

const SubHero: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Flex
      as="section"
      id="about"
      maxW={{ base: 'auto', md: '100%', lg: '100%' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={['center', 'space-around', 'space-evenly', 'space-around']}
      py={16}
      px={8}
      bg="limegreen"
      color="black"
    >
      <Flex
        as="article"
        justify={['center', 'center', 'center', 'flex-start']}
        py={4}
      >
        <Image
          src="/avatar.jpeg"
          width={250}
          height={250}
          style={{ borderRadius: '50%' }}
          alt={
            locale === 'pt_BR' ? subhero.ptBR.avatarAlt : subhero.enUS.avatarAlt
          }
        />
      </Flex>
      <Flex
        as="aside"
        maxW={{ base: '100%', sm: '70%', md: '40%', lg: '40%', xl: '40%' }}
        pt={4}
        align={['center', 'center', 'space-between', 'space-between']}
      >
        <Stack as="article" px={{ base: 4, md: 8, lg: 8, xl: 8 }}>
          <Text as="h2" fontSize="4xl" fontWeight="semibold">
            {locale === 'pt_BR' ? subhero.ptBR.heading : subhero.enUS.heading}
          </Text>
          <Text pb={6} textAlign="justify">
            {locale === 'pt_BR' ? subhero.ptBR.content : subhero.enUS.content}
          </Text>
          <Flex as="section" flexWrap="wrap">
            <TechTag title="NodeJS" />
            <TechTag title="JavaScript" />
            <TechTag title="TypeScript" />
            <TechTag title="Firebase" />
            <TechTag title="SQL" />
            <TechTag title="GraphQL" />
          </Flex>
          <Flex as="section" alignSelf="flex-end" pb={{ base: 8 }}>
            <Link as={motion.a} href="#contact" variant="nostyle">
              <Button
                variant="outline"
                rightIcon={<ChevronDownIcon fontSize="x-large" />}
              >
                {locale === 'pt_BR'
                  ? subhero.ptBR.buttonText
                  : subhero.enUS.buttonText}
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SubHero;
