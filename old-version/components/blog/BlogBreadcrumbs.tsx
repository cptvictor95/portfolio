import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { PostType } from '../../interface/PostType';

const BlogBreadcrumbs: React.FC<{ post?: PostType }> = ({ post }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Container
      as="nav"
      maxW="container.lg"
      px={{ base: 4, md: '12' }}
      py={{ base: 4, md: '8' }}
      minH="10vh"
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/blog`}>
            {locale === 'pt_BR' ? 'Artigos' : 'Blog'}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {post && (
          <BreadcrumbItem>
            <BreadcrumbLink href={`/blog/${post.slug}`}>
              {post.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </Container>
  );
};

export default BlogBreadcrumbs;
