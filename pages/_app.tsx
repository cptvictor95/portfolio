import App from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import 'focus-visible/dist/focus-visible';
import '@fontsource/inconsolata/400.css';
import '@fontsource/barlow-condensed';
import '@fontsource/barlow';

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
