import React from 'react';
import Footer from '../../components/Footer';
import Main from '../../layouts/Main';
import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import PostList from '../../components/blog/PostList';
import BlogBreadcrumbs from '../../components/blog/BlogBreadcrumbs';
import { PostType } from '../../interface/PostType';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';

const graphcmsApiKey = process.env.NEXT_PUBLIC_GRAPHCMS_API_KEY as string;

if (!graphcmsApiKey) {
  throw new Error('Missing env variables');
}

const graphcms = new GraphQLClient(graphcmsApiKey);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
        text
        raw
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

const Blog: React.FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <Main title="Artigos">
      <Header />
      <BlogBreadcrumbs />
      <PostList posts={posts} />
      <Footer />
      <ScrollToTop />
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Blog;
