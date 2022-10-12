import React from 'react';
import Footer from '../../components/Footer';
import Main from '../../layouts/Main';
import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogBreadcrumbs from '../../components/blog/BlogBreadcrumbs';
import { PostType } from '../../interface/PostType';
import Post from '../../components/blog/Post';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import { useRouter } from 'next/router';

const graphcmsApiKey = process.env.NEXT_PUBLIC_GRAPHCMS_API_KEY as string;

if (!graphcmsApiKey) {
  throw new Error('Missing env variables');
}

const graphcms = new GraphQLClient(graphcmsApiKey);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        html
        raw
        text
        markdown
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const BlogPost: React.FC<{ post: PostType }> = ({ post }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Main title={locale === 'pt-BR' ? 'Artigos' : 'Blog'}>
      <Header />
      <BlogBreadcrumbs post={post} />
      <Post post={post} />
      <Footer />
      <ScrollToTop />
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post: PostType) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default BlogPost;
