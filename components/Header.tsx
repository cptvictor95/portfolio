import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Button, IconButton } from '@chakra-ui/button';
import Link from 'next/link';
import { Link as SLink } from 'react-scroll';

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
        {children}
      </Text>
    );
  };

  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="space-between"
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
      <Flex align="center">
        <Text as="h4" fontSize="2xl">
          Victor
        </Text>
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
        as="nav"
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          w="100%"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
        >
          <>
            <MenuItems>
              <SLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button size="md" variant="link">
                  Sobre
                </Button>
              </SLink>
            </MenuItems>
            <MenuItems>
              <SLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button size="md" variant="link">
                  Projetos
                </Button>
              </SLink>
            </MenuItems>
            <MenuItems>
              <SLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button size="md" variant="link">
                  Contato
                </Button>
              </SLink>
            </MenuItems>
          </>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
