import { Container } from '@chakra-ui/react';
import React from 'react';
import BlogHeader from '../components/BlogHeader';
import Footer from '../components/Footer';
import Main from '../layouts/Main';

const Blog = () => {
  return (
    <Main title="Artigos">
      <BlogHeader />
      <Container minH="100%">blog</Container>
      <Footer />
    </Main>
  );
};

export default Blog;
