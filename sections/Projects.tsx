import { Stack, Text, Flex, Button, Image } from '@chakra-ui/react';
import React from 'react';

const Projects = () => {
  return (
    <Stack as="section" py={12} id="projects" bg="green.400" color="purple.900">
      <Text as="h1" fontSize="4xl" fontWeight="semibold" textAlign="center">
        Meus Projetos
      </Text>
      <Flex
        as="section"
        maxW={{ base: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'center', 'center', 'center']}
        py={{ base: 8 }}
      >
        <Flex as="aside" maxW={{ base: 'auto' }} justify="flex-end" px={4}>
          <Image
            src={'./placeholder.png'}
            maxW={{ base: '100%', lg: '350px' }}
            px={{ base: 0, sm: 8 }}
          />
        </Flex>
        <Flex as="article" maxW={{ base: 'auto' }}>
          <Stack px={8}>
            <Text as="h2" fontSize="4xl" fontWeight="bold">
              Title 1
            </Text>
            <Text as="h4" fontSize="2xl">
              Subtitle
            </Text>
            <Text maxW="350px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              totam tempore sit tenetur vitae aperiam ullam exercitationem qui
              quibusdam tempora officiis, nemo nobis omnis magnam ut iusto
              incidunt expedita excepturi.
            </Text>
            <Button variant="outline" alignSelf="flex-start">
              Link to project
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        as="section"
        maxW={{ base: '100%' }}
        direction={{
          base: 'column-reverse',
          sm: 'column-reverse',
          md: 'row',
          lg: 'row',
        }}
        align="center"
        justify={['center', 'center', 'center', 'center']}
        py={{ base: 4, sm: 4, md: 4 }}
      >
        <Stack px={8} align="flex-end">
          <Text as="h2" fontSize="4xl" fontWeight="bold">
            Title 2
          </Text>
          <Text as="h4" fontSize="2xl">
            Subtitle
          </Text>
          <Text textAlign="end" maxW="350px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga totam
            tempore sit tenetur vitae aperiam ullam exercitationem qui quibusdam
            tempora officiis, nemo nobis omnis magnam ut iusto incidunt expedita
            excepturi.
          </Text>
          <Button variant="outline" alignSelf="flex-end">
            Link to project
          </Button>
        </Stack>
        <Flex
          as="aside"
          maxW={{ base: '100%', lg: '50%' }}
          justify="flex-start"
          px={4}
        >
          <Image
            src={'./placeholder.png'}
            maxW={{ base: '100%', lg: '350px' }}
            px={{ base: 0, sm: 8 }}
          />
        </Flex>
      </Flex>
      <Flex
        as="section"
        maxW={{ base: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={['center', 'center', 'center', 'center']}
        py={{ base: 8 }}
      >
        <Flex as="aside" maxW={{ base: 'auto' }} justify="flex-end" px={4}>
          <Image
            src={'./placeholder.png'}
            maxW={{ base: '100%', lg: '350px' }}
            px={{ base: 0, sm: 8 }}
          />
        </Flex>
        <Flex as="article" maxW={{ base: 'auto' }}>
          <Stack px={8}>
            <Text as="h2" fontSize="4xl" fontWeight="bold">
              Title 1
            </Text>
            <Text as="h4" fontSize="2xl">
              Subtitle
            </Text>
            <Text maxW="350px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              totam tempore sit tenetur vitae aperiam ullam exercitationem qui
              quibusdam tempora officiis, nemo nobis omnis magnam ut iusto
              incidunt expedita excepturi.
            </Text>
            <Button variant="outline" alignSelf="flex-start">
              Link to project
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Button alignSelf="center" mt={12}>
        Mais projetos
      </Button>
    </Stack>
  );
};

export default Projects;
