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
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';

const googleTrackingId = process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID as string;
const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID as string;
const hotjarSnippetVersion = process.env
  .NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION as string;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    hotjar.initialize(Number(hotjarId), Number(hotjarSnippetVersion));
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url, googleTrackingId);

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
