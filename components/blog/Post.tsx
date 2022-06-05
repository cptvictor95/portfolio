import { Container, Flex, Box, Avatar, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { PostType } from '../../interface/PostType';

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <Container as="article" maxW="container.lg" minH="90vh" p={12}>
      <Image
        src={post.coverImage.url}
        alt={post.slug}
        borderRadius={5}
        boxSize="100%"
        maxH="400px"
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
  );
};

export default Post;
