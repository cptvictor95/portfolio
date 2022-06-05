import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Button, IconButton } from '@chakra-ui/react';
import { Link as SLink } from 'react-scroll';
import { useRouter } from 'next/dist/client/router';

const BlogHeader: React.FC = (props) => {
  const [show, setShow] = React.useState<boolean>(false);
  const toggleMenu = () => setShow(!show);
  const router = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      position={{ base: 'relative', md: 'sticky', lg: 'sticky', xl: 'sticky' }}
      top={{ md: 0, lg: 0, xl: 0 }}
      bg="black"
      wrap="wrap"
      mb={12}
      py={4}
      px={8}
      zIndex="1"
      {...props}
    >
      <Flex align="center" flexGrow={1}>
        <Text as="h4" fontSize="2xl">
          Victor
        </Text>
      </Flex>
      <Box
        as="aside"
        display={{
          base: 'block',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        {show ? (
          <IconButton
            icon={<CloseIcon />}
            onClick={toggleMenu}
            aria-label="close-menu"
            variant="mobile-menu-btn"
          />
        ) : (
          <IconButton
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            aria-label="open-menu"
            variant="mobile-menu-btn"
            fontSize="2xl"
          />
        )}
      </Box>

      <Box
        as="nav"
        display={{ base: show ? 'block' : 'none', sm: 'block', md: 'block' }}
        flexBasis={{ base: '100%', sm: 'auto', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          w="100%"
          direction={['column', 'row', 'row', 'row']}
          justify={{ base: 'center' }}
          gap={{ base: 0, sm: 5, md: 5, lg: 5, xl: 5 }}
        >
          <Button
            size="md"
            variant="link"
            title="Ir para Home"
            onClick={() => router.push('/')}
          >
            Home
          </Button>

          <Button
            onClick={() => router.push('/blog')}
            size="md"
            variant="link"
            title="Ir para Artigos"
          >
            Artigos
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default BlogHeader;
