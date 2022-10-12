import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button } from './components/Button';
import { Link } from './components/Link';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        bg: 'black',
        color: 'purple.50',
        scrollBehavior: 'smooth',
      },
      a: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'purple.50',
        borderRadius: '0',
        transition: 'color 100ms ease-in-out',
        _hover: {
          color: 'light-green',
          textDecoration: 'none',
        },
        _focus: {
          color: 'dark-green',
        },
        _active: {
          color: 'dark-green',
        },
      },
    },
  },
  fonts: {
    heading: 'Barlow Condensed',
    body: 'Inconsolata',
    button: 'Barlow Condensed',
    logo: 'M Plus 2',
  },
  textStyles: {
    h1: {
      fontSize: ['30px', '42px', '52px'],
      fontWeight: 'bold',
      lineHeight: '1',
    },
    h2: {
      fontSize: ['28px', '36px', '42px'],
      fontWeight: 'bold',
      lineHeight: '1',
    },
    h3: {
      fontSize: ['24px', '28px', '32px'],
      fontWeight: 'semibold',
      lineHeight: '1',
    },
    h4: {
      fontSize: ['20px', '22px', '24px'],
      fontWeight: 'semibold',
      lineHeight: '1',
    },
    h5: {
      fontSize: ['18px', '20px', '22px'],
      fontWeight: 'semibold',
      lineHeight: '1',
    },
  },
  colors,
  components: {
    Button,
    Link,
  },
});
