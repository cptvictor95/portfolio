import React from 'react';
import { Text } from '@chakra-ui/react';
import { RawChildren } from '../interface/PostType';

export const formatRawTextStyles = (
  raw: RawChildren,
  index: number
): JSX.Element => {
  switch (raw.type) {
    case 'heading-one':
      return (
        <Text key={index} as="h1" textStyle="h1" py="2">
          {raw.children[0].text}
        </Text>
      );
    case 'heading-two':
      return (
        <Text key={index} as="h2" textStyle="h2" py="2">
          {raw.children[0].text}
        </Text>
      );
    case 'heading-three':
      return (
        <Text key={index} as="h3" textStyle="h3" py="2">
          {raw.children[0].text}
        </Text>
      );
    case 'heading-four':
      return (
        <Text key={index} as="h4" textStyle="h4" py="2">
          {raw.children[0].text}
        </Text>
      );
    case 'paragraph':
      return (
        <Text key={index} py="1">
          {raw.children[0].text}
        </Text>
      );
    default:
      return <></>;
  }
};
