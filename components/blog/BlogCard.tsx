import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export type Post = {
  title: string;
  content: {
    html: string;
  };
  author: { name: string; avatar: { url: string } };
  coverImage: { id: string; url: string };
  datePublished: string;
  slug: string;
};

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Box
        cursor="pointer"
        border="1px"
        borderColor="white.100"
        borderRadius={5}
        maxW="300px"
      >
        <Image src={post.coverImage.url} borderRadius={5} boxSize="100%" />
        <Flex direction="column" p={5} gap={5}>
          <Text as="h3" fontSize="xl" fontWeight="semibold">
            {post.title}
          </Text>
          <Flex align="center" py={2} w="100%">
            <Avatar
              size="md"
              name={post.author.name}
              src={post.author.avatar.url}
            />
            <Text px={3}>{post.author.name}</Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default BlogCard;
