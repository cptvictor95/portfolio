import React from 'react';
import Footer from '../../components/Footer';
import Main from '../../layouts/Main';
import { GraphQLClient } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogBreadcrumbs from '../../components/blog/BlogBreadcrumbs';
import { PostType } from '../../interface/PostType';
import Post from '../../components/blog/Post';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import { useRouter } from 'next/router';
import { queryPostBySlug } from '../../lib/queryPostBySlug';
import { queryPostSlugs } from '../../lib/queryPostSlugs';

const graphcmsApiKey = process.env.NEXT_PUBLIC_GRAPHCMS_API_KEY as string;

if (!graphcmsApiKey) {
  throw new Error('Missing env variables');
}

const graphcms = new GraphQLClient(graphcmsApiKey);

const BlogPost: React.FC<{ post: PostType }> = ({ post }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Main title={locale === 'pt_BR' ? 'Artigos' : 'Blog'}>
      <Header />
      <BlogBreadcrumbs post={post} />
      <Post post={post} />
      <Footer />
      <ScrollToTop />
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(queryPostSlugs);

  return {
    paths: posts.map((post: PostType) => ({
      params: { slug: post.slug, locale: post.locale },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug;
  const headers = {
    'Content-Type': 'application/json',
    'gcms-locales': locale as string,
  };

  const data = await graphcms.request(queryPostBySlug, { slug }, headers);
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default BlogPost;
