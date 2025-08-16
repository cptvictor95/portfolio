import { Text } from '@chakra-ui/react';
import React from 'react';

const TechTag: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Text borderLeft="4px solid" fontSize="lg" pl={2} pr={3} mb={4}>
      {title}
    </Text>
  );
};

export default TechTag;
