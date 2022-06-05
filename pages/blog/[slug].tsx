/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BlogHeader from '../../components/blog/BlogHeader';
import Footer from '../../components/Footer';
import Main from '../../layouts/Main';
import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';

const graphcmsApiKey = process.env.NEXT_PUBLIC_GRAPHCMS_API_KEY as string;

if (!graphcmsApiKey) {
  throw new Error('Missing env variables');
}

const graphcms = new GraphQLClient(graphcmsApiKey);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        html
        raw
        text
        markdown
      }
      author {
        name
        avatar {
          url
        }
      }
      coverImage {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const BlogPost: React.FC<{ post: any }> = ({ post }) => {
  return (
    <Main title="Artigos">
      <BlogHeader />
      <Container as="article" maxW="container.md" minH="90vh" p={12}>
        <Image
          src={post.coverImage.url}
          borderRadius={5}
          boxSize="100%"
          h="300px"
          objectFit="cover"
        />
        <Flex direction="column" px={3} py={5} gap={5}>
          <Text as="h3" fontSize="xl" fontWeight="semibold">
            {post.title}
          </Text>
          <Text>Data de publicação: {post.datePublished}</Text>

          <Box dangerouslySetInnerHTML={{ __html: post.content.html }}></Box>
          <Flex align="center" py={2} w="100%">
            <Avatar
              size="md"
              name={post.author.name}
              src={post.author.avatar.url}
            />
            <Text px={5}>{post.author.name}</Text>
          </Flex>
        </Flex>
      </Container>
      <Footer />
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default BlogPost;
