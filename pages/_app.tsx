import App from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../theme/theme';

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
