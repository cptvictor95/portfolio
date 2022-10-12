import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Footer: React.FC = () => {
  const currentDate = Date.now();
  const currentYear = new Date(currentDate).getFullYear();
  const router = useRouter();
  const { locale } = router;
  return (
    <Flex as="footer" p={8} bg="green-camo" w="100%" h="10vh">
      <Text>
        © {currentYear} Victor Cardoso Pudo Torres -{' '}
        {locale === 'pt_BR'
          ? 'Todos os direitos reservados'
          : 'All rights reserved'}
      </Text>
    </Flex>
  );
};

export default Footer;
