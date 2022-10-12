import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { PostType } from '../../interface/PostType';

const BlogBreadcrumbs: React.FC<{ post?: PostType }> = ({ post }) => {
  return (
    <Container as="nav" maxW="container.lg" py={8} px={12} h="10vh">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/blog`}>Artigos</BreadcrumbLink>
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
