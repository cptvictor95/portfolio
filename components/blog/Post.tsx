import React from 'react';
import { Container, Flex, Avatar, Text, Image } from '@chakra-ui/react';
import { PostType } from '../../interface/PostType';
import { formatRawTextStyles } from '../../utils/formatRawTextStyles';

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  const postContent = post.content.raw.children;
  return (
    <Container
      as="article"
      maxW="container.lg"
      minH="70vh"
      px={{ base: 4, md: '12' }}
      py={{ base: 4, md: '8' }}
    >
      <Image
        src={post.coverImage && post.coverImage.url}
        alt={post.slug}
        borderRadius={5}
        boxSize="100%"
        maxH="400px"
        objectFit="cover"
      />
      <Flex direction="column" py={5} gap={5}>
        <Text as="h1" textStyle="h1">
          {post.title}
        </Text>
        <Text>Data de publicação: {post.datePublished}</Text>

        <Flex as="article" direction="column" gap="2">
          {postContent.map((raw, index) => {
            return formatRawTextStyles(raw, index);
          })}
        </Flex>
        {post.author && (
          <Flex align="center" py={2} w="100%">
            <Avatar
              size="md"
              name={post.author.name}
              src={post.author.avatar && post.author.avatar.url}
            />
            <Text px={5}>{post.author.name}</Text>
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default Post;
