import React from 'react';
import { Container, Flex, Avatar, Text, Image } from '@chakra-ui/react';
import { PostType } from '../../interface/PostType';
import { formatRawTextStyles } from '../../utils/formatRawTextStyles';
import { useRouter } from 'next/router';

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  const postContent = post.content.raw.children;
  const router = useRouter();
  const { locale } = router;
  return (
    <Container
      as="article"
      maxW="container.lg"
      minH="70vh"
      px={{ base: 4, md: 12 }}
    >
      <Image
        src={post.coverImage && post.coverImage.url}
        alt={post.slug}
        borderRadius={5}
        boxSize="100%"
        maxH="400px"
        objectFit="cover"
        my={{ base: 0, md: 4 }}
      />
      <Flex direction="column" py={5} gap={5}>
        <Text as="h1" textStyle="h1">
          {post.title}
        </Text>
        {post.author && (
          <Flex h="100%" align="center" py={2} w="100%">
            <Avatar
              size="lg"
              name={post.author.name}
              src={post.author.avatar && post.author.avatar.url}
            />
            <Flex h="100%" direction="column" gap="3" px={5}>
              <Text textStyle="h5">{post.author.name}</Text>
              <Flex gap="5">
                <Text>
                  {locale === 'pt_BR'
                    ? 'Data de publicação: '
                    : 'Publishing date: '}
                  {locale === 'pt_BR'
                    ? new Date(post.datePublished).toLocaleDateString()
                    : new Date(post.datePublished).toDateString().slice(3)}
                </Text>
                ·<Text> 10 min read</Text>
              </Flex>
            </Flex>
          </Flex>
        )}

        <Flex as="article" direction="column" gap="2">
          {postContent.map((raw, index) => {
            return formatRawTextStyles(raw, index);
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Post;
