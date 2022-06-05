import { Avatar, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [postDate, setPostDate] = useState('');

  const handleGoToPost = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const formatDate = (datePublished: string) => {
    if (datePublished) {
      const year = datePublished.slice(0, 4);
      const month = datePublished.slice(5, 7);
      const day = datePublished.slice(8, 10);

      const formattedBRDate = `${day}/${month}/${year}`;

      setPostDate(formattedBRDate);
    }
  };

  useEffect(() => {
    formatDate(post.datePublished);
  }, [post]);

  return (
    <Flex
      cursor="pointer"
      w="100%"
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row',
      }}
      justifyContent={{
        base: 'center',
        sm: 'center',
        md: 'flex-start',
        lg: 'flex-start',
        xl: 'flex-start',
      }}
      onClick={() => handleGoToPost(post.slug)}
      gap={{
        base: 0,
        sm: 0,
        md: 8,
        lg: 8,
        xl: 8,
      }}
    >
      <Image
        src={post.coverImage.url}
        borderRadius={5}
        boxSize="100%"
        objectFit="cover"
        maxW={{ base: '', sm: '', md: '300px', lg: '300px', xl: '300px' }}
        h={{
          base: '200px',
          sm: '200px',
          md: '175px',
          lg: '175px',
          xl: '175px',
        }}
      />
      <Flex direction="column" p={5} gap={5}>
        <Text as="h3" fontSize="xl" fontWeight="semibold">
          {post.title}
        </Text>
        <Text fontSize="sm">Data: {postDate}</Text>
        <Flex align="center" py={2} w="100%">
          <Avatar
            size="sm"
            name={post.author.name}
            src={post.author.avatar.url}
          />
          <Text px={3}>{post.author.name}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
