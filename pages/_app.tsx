import React from 'react';
import App from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import 'focus-visible/dist/focus-visible';
import '@fontsource/inconsolata/400.css';
import '@fontsource/barlow-condensed';
import '@fontsource/barlow';
import '@fontsource/m-plus-2';
import '@fontsource/martel';
import '@fontsource/muli';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
