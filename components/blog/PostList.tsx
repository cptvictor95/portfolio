import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { PostType } from '../../interface/PostType';
import BlogCard from './BlogCard';

const PostList: React.FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <Container
      as="article"
      maxW="container.lg"
      py={8}
      px={12}
      position="relative"
      top="10vh"
    >
      <Flex direction="column" gap={8} align={{ base: 'center' }} w="100%">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </Flex>
    </Container>
  );
};

export default PostList;
