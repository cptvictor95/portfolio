import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { ptBR, enUS } from '../../locale/resume';

export const RightColumn = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pt_BR' ? ptBR : enUS;

  return (
    <Box
      w={{
        base: '100%',
        md: '67%',
      }}
      bg="green-camo"
      color="white"
      p={8}
      px={{
        base: '4',
        sm: '8',
        md: '16',
        lg: '24',
      }}
    >
      <Box as="section" mb={8}>
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          pb={2}
          borderBottom="1px solid"
          borderColor="light-green"
          color="light-green"
        >
          {t.experience.title}
        </Heading>

        {t.experience.items.slice(0, 7).map((job, index) => (
          <Box mb={6} key={index}>
            <Heading
              as="h3"
              fontSize="xl"
              fontWeight="semibold"
              color="light-green"
            >
              {job.role} | {job.company}
            </Heading>
            <Text fontSize="sm" color="light-gray" mb={2}>
              {job.period}
              {job.location ? ` • ${job.location}` : ''}
            </Text>

            {job.overview && (
              <Text fontSize="sm" mb={2}>
                {job.overview}
              </Text>
            )}

            {job.projects &&
              job.projects.map((project, projectIndex) => (
                <Box
                  mb={projectIndex === job.projects.length - 1 ? 0 : 4}
                  key={`project-${projectIndex}`}
                >
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    mb={1}
                    color="dark-gray"
                  >
                    {project.name}
                  </Text>
                  <UnorderedList
                    pl={5}
                    fontSize="sm"
                    spacing={1}
                    color="light-gray"
                  >
                    {project.responsibilities.map((resp, respIndex) => (
                      <ListItem key={`resp-${projectIndex}-${respIndex}`}>
                        {resp}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}

            {job.responsibilities && (
              <UnorderedList
                pl={5}
                fontSize="sm"
                spacing={1}
                color="light-gray"
              >
                {job.responsibilities.map((resp, respIndex) => (
                  <ListItem key={`resp-${respIndex}`}>{resp}</ListItem>
                ))}
              </UnorderedList>
            )}
          </Box>
        ))}
      </Box>

      <Box as="section" mb={8}>
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          pb={2}
          borderBottom="1px solid"
          borderColor="light-green"
          color="light-green"
        >
          {t.education.title}
        </Heading>
        <UnorderedList pl={5} fontSize="sm" spacing={3} color="light-gray">
          {t.education.items.map((item, index) => (
            <ListItem key={index}>
              {item.course} at {item.institution} - {item.period}
              {item.description && (
                <Text as="span" display="block" mt={1}>
                  {item.description}
                </Text>
              )}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box as="section">
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          pb={2}
          borderBottom="1px solid"
          borderColor="light-green"
          color="light-green"
        >
          {t.skills.title}
        </Heading>
        <UnorderedList pl={5} fontSize="sm" spacing={3} color="light-gray">
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.frontend}:
            </Text>{' '}
            {t.skills.frontendDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.backend}:
            </Text>{' '}
            {t.skills.backendDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.development}:
            </Text>{' '}
            {t.skills.developmentDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.infrastructure}:
            </Text>{' '}
            {t.skills.infrastructureDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.database}:
            </Text>{' '}
            {t.skills.databaseDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.testing}:
            </Text>{' '}
            {t.skills.testingDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.versioning}:
            </Text>{' '}
            {t.skills.versioningDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.languages}:
            </Text>{' '}
            {t.skills.languagesDesc}
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              {t.skills.api}:
            </Text>{' '}
            {t.skills.apiDesc}
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
