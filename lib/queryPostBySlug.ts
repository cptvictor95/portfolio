import { gql } from 'graphql-request';

export const queryPostBySlug = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      locale
      content {
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
