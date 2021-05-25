import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Button, IconButton } from '@chakra-ui/button';
import Link from 'next/link';

const Header: React.FC = (props) => {
  const [show, setShow] = React.useState<boolean>(false);
  const toggleMenu = () => setShow(!show);

  const MenuItems: React.FC<{
    children: React.ReactNode;
    to?: string;
    isLast?: boolean;
  }> = ({ children, isLast, to = '/', ...rest }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        <Link href={to}>{children}</Link>
      </Text>
    );
  };

  return (
    <Flex
      as="nav"
      w="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      mb={8}
      p={8}
      {...props}
    >
      <Flex align="center">
        <Text w="100px">Victor</Text>
      </Flex>
      <Box as="aside" display={{ base: 'block', md: 'none' }}>
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
          />
        )}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          w="100%"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[8, 8, 0, 0]}
        >
          <>
            <MenuItems to="/">
              <Button size="md" variant="link">
                Home
              </Button>
            </MenuItems>
            <MenuItems>
              <Button size="md" variant="link">
                Sobre
              </Button>
            </MenuItems>
            <MenuItems>
              <Button size="md" variant="link">
                Projetos
              </Button>
            </MenuItems>
            <MenuItems>
              <Button size="md" variant="link">
                Contato
              </Button>
            </MenuItems>
          </>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
