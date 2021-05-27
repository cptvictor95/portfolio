import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button } from './components/Button';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        bg: 'black',
        color: 'purple.50',
      },
    },
  },
  colors,
  components: {
    Button,
  },
});
