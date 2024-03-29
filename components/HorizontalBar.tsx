import { Flex, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const HorizontalBar: React.FC = () => {
  return (
    <Flex
      as="section"
      direction="column"
      justify="center"
      align="center"
      gap={8}
      w="100%"
    >
      <Flex
        as="nav"
        w={{ base: '50vw', sm: '40vw', md: '30vw', lg: '30vw', xl: '25vw' }}
        justify="space-around"
      >
        <Link
          href="https://www.linkedin.com/in/victorcardosopudotorres/"
          isExternal
        >
          <IconButton
            icon={<TiSocialLinkedinCircular />}
            aria-label="Ícone Linkedin"
            title="Ir para Linkedin"
            variant="socialIcon"
            fontSize={{
              base: '4xl',
              sm: '5xl',
              md: '5xl',
              lg: '5xl',
              xl: '5xl',
            }}
            maxH="44px"
            maxW="44px"
          />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5511947006135"
          isExternal
        >
          <IconButton
            icon={<AiOutlineWhatsApp />}
            aria-label="Ícone Whatsapp"
            title="Ir para Whatsapp"
            variant="socialIcon"
            fontSize={{
              base: '3xl',
              sm: '4xl',
              md: '4xl',
              lg: '4xl',
              xl: '4xl',
            }}
          />
        </Link>
        <Link href="https://github.com/cptvictor95/" isExternal>
          <IconButton
            icon={<AiFillGithub />}
            aria-label="Ícone Github"
            title="Ir para Github"
            variant="socialIcon"
            fontSize={{
              base: '3xl',
              sm: '4xl',
              md: '4xl',
              lg: '4xl',
              xl: '4xl',
            }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default HorizontalBar;
