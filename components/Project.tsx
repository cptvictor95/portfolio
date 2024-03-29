import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text, Link, Button, Box, Tag } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ProjectProps } from '../interface/Project';

const Project: React.FC<ProjectProps> = ({
  contentDirection = 'right',
  title,
  content,
  stack,
  links,
  previewImgUrl,
  isOnGithub = false,
}) => {
  const stackText =
    stack === 'fullstack'
      ? 'Full Stack'
      : stack === 'frontend'
      ? 'Front-end'
      : 'Back-end';
  const router = useRouter();
  const { locale } = router;

  return contentDirection === 'right' ? (
    <Flex
      as="section"
      maxW="100%"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
    >
      <Flex
        as="aside"
        maxW={{ base: '100%', md: '50%', lg: '50%' }}
        justify="flex-end"
        px={8}
      >
        <Box maxWidth="lg" width="100%" maxHeight="250px">
          <Image
            src={previewImgUrl}
            width={500}
            height={250}
            alt={`Prévia do projeto ${title ? title : ''}`}
            style={{
              maxWidth: '32rem',
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Flex>
      <Flex as="article" maxW="auto">
        <Stack px={8} gap="2">
          <Text as="h3" textStyle="h3" pt={4}>
            {title}
          </Text>

          <Tag w="max-content" colorScheme="green" color="black">
            {stackText}
          </Tag>

          <Text maxW="lg" textAlign="justify" pb={3}>
            {content}
          </Text>
          {links?.production && (
            <Link href={links.production} isExternal variant="nostyle">
              <Button
                variant="outline"
                w="max-content"
                rightIcon={<ChevronRightIcon fontSize="x-large" />}
              >
                {locale === 'pt_BR' ? 'Ir para o projeto' : 'Go to project'}
              </Button>
            </Link>
          )}
          {isOnGithub ? (
            <>
              {stack === 'fullstack' && (
                <Flex minW="100%" justifyContent="space-between">
                  <Link
                    href={links.github?.fullStack?.frontUrl}
                    isExternal
                    variant="nostyle"
                  >
                    <Button variant="outline" leftIcon={<AiFillGithub />}>
                      {locale === 'pt_BR'
                        ? 'Ver frontend no github'
                        : 'See frontend on github'}
                    </Button>
                  </Link>
                  <Link
                    href={links.github?.fullStack?.backUrl}
                    isExternal
                    variant="nostyle"
                  >
                    <Button variant="outline" leftIcon={<AiFillGithub />}>
                      {locale === 'pt_BR'
                        ? 'Ver backend no github'
                        : 'See backend on github'}
                    </Button>
                  </Link>
                </Flex>
              )}
              {stack === 'frontend' && (
                <Link
                  href={links.github?.frontendUrl}
                  isExternal
                  variant="nostyle"
                >
                  <Button
                    variant="outline"
                    alignSelf="flex-end"
                    leftIcon={<AiFillGithub />}
                  >
                    {locale === 'pt_BR'
                      ? 'Ver frontend no github'
                      : 'See frontend on github'}
                  </Button>
                </Link>
              )}
              {stack === 'backend' && (
                <Link
                  href={links.github?.backendUrl}
                  isExternal
                  variant="nostyle"
                >
                  <Button
                    variant="outline"
                    alignSelf="flex-end"
                    leftIcon={<AiFillGithub />}
                  >
                    {locale === 'pt_BR'
                      ? 'Ver backend no github'
                      : 'See backend on github'}
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <></>
          )}
        </Stack>
      </Flex>
    </Flex>
  ) : (
    <Flex
      as="section"
      maxW="100%"
      direction={{
        base: 'column-reverse',
        sm: 'column-reverse',
        md: 'row',
        lg: 'row',
      }}
      align="center"
      justify="center"
      py={4}
    >
      <Stack px={8} align={{ base: 'flex-start', md: 'flex-end' }}>
        <Text as="h3" textStyle="h3" pt={4}>
          {title}
        </Text>

        <Tag w="max-content" colorScheme="green" color="black">
          {stackText}
        </Tag>

        <Text maxW="lg" textAlign="justify" pb={3}>
          {content}
        </Text>

        <Link
          href="https://github.com/future4code/Victor-Cardoso/tree/master/semana17/labenu-system"
          isExternal
          variant="nostyle"
        >
          <Button
            variant="outline"
            alignSelf="flex-end"
            leftIcon={<AiFillGithub />}
          >
            {locale === 'pt_BR' ? 'Ir para github' : 'Go to github'}
          </Button>
        </Link>
      </Stack>
      <Flex
        as="aside"
        maxW={{ base: '100%', md: '50%', lg: '50%' }}
        justify="flex-start"
        px={8}
      >
        <Box maxW="lg" width="100%" maxHeight="250px">
          <Image
            src={previewImgUrl}
            width={500}
            height={250}
            alt={`Prévia do projeto ${title ? title : ''}`}
            style={{
              maxWidth: '32rem',
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
