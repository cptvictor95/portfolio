import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import 'focus-visible/dist/focus-visible';
import '@fontsource/inconsolata/400.css';
import '@fontsource/barlow-condensed';
import '@fontsource/barlow';
import '@fontsource/m-plus-2';
import '@fontsource/martel';
import '@fontsource/muli';
import { hotjar } from 'react-hotjar';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    hotjar.initialize(3442319, 1);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
