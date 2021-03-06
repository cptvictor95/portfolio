import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Flex as="footer" p={8} bg="green-camo" w="100%">
      <Text>
        © 2021 Victor Cardoso Pudo Torres - Todos os direitos reservados
      </Text>
    </Flex>
  );
};

export default Footer;
