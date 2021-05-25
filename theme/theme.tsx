import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        bg: 'black',
        color: 'white',
      },
    },
  },
  colors,
});
