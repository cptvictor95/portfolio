import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text, Link, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

type ContentDirection = 'left' | 'right';
type ProjectStack = 'fullstack' | 'frontend' | 'backend';
type ProjectLinks = {
  production?: string;
  github?: {
    fullStack?: {
      frontUrl: string;
      backUrl: string;
    };
    frontendUrl?: string;
    backendUrl?: string;
  };
};

const Project: React.FC<{
  contentDirection?: ContentDirection;
  title: string;
  content: string;
  stack: ProjectStack;
  links: ProjectLinks;
  previewImgUrl: string;
  isOnGithub?: boolean;
}> = ({
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

  return contentDirection === 'right' ? (
    <Flex
      as="section"
      maxW="100%"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      py={8}
    >
      <Flex
        as="aside"
        maxW={{ base: '100%', md: '50%', lg: '50%' }}
        justify="flex-end"
        px={8}
      >
        <Link href={previewImgUrl} isExternal px={{ base: 0, sm: 8, md: 4 }}>
          <Image
            src={previewImgUrl}
            maxW={{ base: '100%', lg: '350px' }}
            alt={`Prévia do projeto ${title ? title : ''}`}
          />
          <Text>Clique na imagem para ampliar</Text>
        </Link>
      </Flex>
      <Flex as="article" maxW="auto">
        <Stack px={8}>
          <Text as="h2" fontSize="4xl" fontWeight="bold" pt={4}>
            {title}
          </Text>
          <Text as="h4" fontSize="2xl" m={0} fontWeight="semibold">
            {stackText}
          </Text>
          <Text maxW="350px" textAlign="justify">
            {content}
          </Text>
          {links?.production && (
            <Link href={links.production} isExternal variant="nostyle">
              <Button
                variant="outline"
                w="max-content"
                rightIcon={<ChevronRightIcon fontSize="x-large" />}
              >
                Ir para o projeto
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
                      Ver Frontend no github
                    </Button>
                  </Link>
                  <Link
                    href={links.github?.fullStack?.backUrl}
                    isExternal
                    variant="nostyle"
                  >
                    <Button variant="outline" leftIcon={<AiFillGithub />}>
                      Ver Backend no github
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
                    Ver frontend no Github
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
                    Ver backend no Github
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
      <Stack px={8} align="flex-end">
        <Text as="h2" fontSize="4xl" fontWeight="bold" pt={4}>
          {title}
        </Text>
        <Text as="h4" fontSize="2xl" m={0} fontWeight="semibold">
          {stackText}
        </Text>
        <Text maxW="350px" textAlign="justify">
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
            Ver projeto no github
          </Button>
        </Link>
      </Stack>
      <Flex
        as="aside"
        maxW={{ base: '100%', md: '50%', lg: '50%' }}
        justify="flex-start"
        px={8}
      >
        <Link href={previewImgUrl} isExternal px={{ base: 0, sm: 8, md: 4 }}>
          <Image
            src={previewImgUrl}
            maxW={{ base: '100%', lg: '350px' }}
            alt={`Prévia do projeto ${title ? title : ''}`}
          />
          <Text>Clique na imagem para ampliar</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Project;
