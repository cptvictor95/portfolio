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
        lg: '32',
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

        <Box mb={6}>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="semibold"
            color="light-green"
          >
            Senior Software Engineer | Webera
          </Heading>
          <Text fontSize="sm" color="light-gray" mb={2}>
            Jun/2023 - Present • Remote - Virginia, United States
          </Text>
          <Text fontSize="sm" mb={2}>
            Technical leadership in multiple projects using Scrum and Agile
            methodologies:
          </Text>

          <Box mb={4}>
            <Text fontSize="sm" fontWeight="semibold" mb={1} color="dark-gray">
              Thesus Health (Telehealth Platform):
            </Text>
            <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
              <ListItem>
                Architected and built a full-stack solution using NextJS,
                TypeScript, and Google Cloud Platform services
              </ListItem>
              <ListItem>
                Managed Firebase/Firestore and Supabase infrastructure,
                security, and third-party integrations
              </ListItem>
              <ListItem>
                Collaborated with Product Designers to make decisions on product
                design and business rules implementation
              </ListItem>
              <ListItem>
                Implemented Nurse/Facility Station features: video conferencing
                with Agora API, appointment calendar, patient management,
                medication prescription, vital signs monitoring, integration
                with External Medical API (MediSpan)
              </ListItem>
              <ListItem>
                Developed Admin Station with Role-Based Access Control (RBAC)
                for customer management
              </ListItem>
              <ListItem>Deployed applications using Firebase Hosting</ListItem>
              <ListItem>
                Tech stack: NextJS, TypeScript, Firebase, Tailwind CSS,
                Shadcn/ui, React Query
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text fontSize="sm" fontWeight="semibold" mb={1} color="dark-gray">
              Daily Pulse:
            </Text>
            <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
              <ListItem>
                Developed full-stack features and fixed bugs using NextJS and
                Supabase
              </ListItem>
              <ListItem>
                Implemented end-to-end testing infrastructure using Playwright
              </ListItem>
              <ListItem>Designed and optimized SQL data models</ListItem>
              <ListItem>
                Built a multi-channel notification system (in-app, email, push)
                handling 2000+ requests/day
              </ListItem>
              <ListItem>
                Maintained and improved technical documentation
              </ListItem>
              <ListItem>
                Tech stack: NextJS, TypeScript, Supabase, TailwindCSS,
                Shadcn/ui, React Query, Playwright
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box mb={6}>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="semibold"
            color="light-green"
          >
            Full Stack Web Developer | Groope
          </Heading>
          <Text fontSize="sm" color="light-gray" mb={2}>
            Nov/2020 - Jun/2023 • Mogi das Cruzes, São Paulo, Brazil
          </Text>
          <Text fontSize="sm" mb={2}>
            Development of a B2B SaaS marketplace platform:
          </Text>
          <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
            <ListItem>
              Was mentored by a software architect initially, then took over all
              software architecture responsibilities
            </ListItem>
            <ListItem>
              Implemented Strapi CMS catalog for products, brands, stores, and
              providers
            </ListItem>
            <ListItem>
              Built invitation system for users to join app events
            </ListItem>
            <ListItem>
              Developed apportions system with cost-splitting calculator for
              purchase event hosts
            </ListItem>
            <ListItem>
              Implemented monitoring and logging with Sentry and Google
              Analytics
            </ListItem>
            <ListItem>
              Created CI/CD pipelines with CircleCI for QA and feature
              deployment
            </ListItem>
            <ListItem>
              Set up cloud storage in Google Cloud Platform for both Strapi and
              NextJS applications
            </ListItem>
            <ListItem>Deployed NextJS application on Vercel</ListItem>
            <ListItem>
              Tech stack: TypeScript, NextJS, Firebase, Strapi, CircleCI
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mb={6}>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="semibold"
            color="light-green"
          >
            Lead Developer | BSBVistos
          </Heading>
          <Text fontSize="sm" color="light-gray" mb={2}>
            Feb/2023 - May/2023 • Remote - Mogi das Cruzes, São Paulo, Brazil
          </Text>
          <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
            <ListItem>
              Led technical team of 3 junior developers in website construction
            </ListItem>
            <ListItem>
              Defined system architecture and managed project lifecycle
            </ListItem>
            <ListItem>Implemented Strapi for content management</ListItem>
            <ListItem>
              Created brand identity, wireframes, and high-fidelity layouts
            </ListItem>
            <ListItem>
              Implemented process automation features resulting in increased
              client acquisition
            </ListItem>
            <ListItem>Tech stack: PostgreSQL, Strapi</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={6}>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="semibold"
            color="light-green"
          >
            Freelance Developer | Assistive
          </Heading>
          <Text fontSize="sm" color="light-gray" mb={2}>
            Feb/2023 - May/2023
          </Text>
          <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
            <ListItem>
              Created complete WordPress website with internationalization,
              blog, accessibility features, and SEO optimization
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mb={6}>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="semibold"
            color="light-green"
          >
            Freelance Developer | MandeBem
          </Heading>
          <Text fontSize="sm" color="light-gray" mb={2}>
            Mar/2020 - Aug/2020
          </Text>
          <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
            <ListItem>
              Developed 12 responsive pages with Angular 9 for the
              administrative section of an e-learning platform
            </ListItem>
            <ListItem>
              Implemented API data flow and accessibility concepts
            </ListItem>
          </UnorderedList>
        </Box>

        <Box mb={6}>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="semibold"
            color="light-green"
          >
            English Teacher | Wizard by Pearson Idioms
          </Heading>
          <Text fontSize="sm" color="light-gray" mb={2}>
            Jan/2020 - Jul/2021
          </Text>
          <UnorderedList pl={5} fontSize="sm" spacing={1} color="light-gray">
            <ListItem>
              Planned and taught classes for students of different levels using
              various methodologies
            </ListItem>
            <ListItem>
              Achieved 100% re-enrollment rate across all classes taught
            </ListItem>
          </UnorderedList>
        </Box>
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
          Education
        </Heading>
        <UnorderedList pl={5} fontSize="sm" spacing={3} color="light-gray">
          <ListItem>
            FullStack Web Dev Bootcamp at Labenu - 6 months duration with
            approximately 1000 hours of practical activities with TypeScript,
            ReactJS, NodeJS, SQL, Git and more
          </ListItem>
          <ListItem>
            Systems Analysis and Development Technology Course - 2018 to 2019
            (Interrupted due to lack of financial resources)
          </ListItem>
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
          Skills
        </Heading>
        <UnorderedList pl={5} fontSize="sm" spacing={3} color="light-gray">
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              Development:
            </Text>{' '}
            TypeScript, JavaScript (Next.js), Node.js, TDD, BDD, UDD. Experience
            in full-stack development with focus on REST APIs and frontend
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              Infrastructure:
            </Text>{' '}
            Google Cloud Platform, AWS S3 and EC2. CI/CD with CircleCI and
            GitHub Actions
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              Database:
            </Text>{' '}
            Data modeling and management with SQL, Firestore, and MongoDB
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              Testing and monitoring:
            </Text>{' '}
            Jest, Playwright, Sentry, GA4
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              Versioning and methodologies:
            </Text>{' '}
            Git, Jira, Agile methodology and SCRUM
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              Languages:
            </Text>{' '}
            Fluent English (TOEIC 920/990), Intermediate Spanish and French
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="semibold" color="dark-green">
              API Technologies:
            </Text>{' '}
            REST, basic tRPC and GraphQL
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
