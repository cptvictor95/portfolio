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
        fontFamily: 'Barlow',
        cursor: 'pointer',
        textTransform: 'uppercase',
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
  },
  colors,
  components: {
    Button,
    Link,
  },
});
