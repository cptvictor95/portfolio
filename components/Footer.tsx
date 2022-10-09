import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {
  const currentDate = Date.now();
  const currentYear = new Date(currentDate).getFullYear();
  return (
    <Flex as="footer" p={8} bg="green-camo" w="100%">
      <Text>
        © {currentYear} Victor Cardoso Pudo Torres - Todos os direitos
        reservados
      </Text>
    </Flex>
  );
};

export default Footer;
