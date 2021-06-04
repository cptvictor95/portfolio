import { Flex } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

const Main: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
  ...mainProps
}) => {
  return (
    <Flex
      title={title}
      as="main"
      m="0 auto"
      direction="column"
      maxW={{ base: 'auto' }}
      minH="70vh"
      {...mainProps}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Flex>
  );
};

export default Main;
