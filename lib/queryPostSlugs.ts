import { gql } from 'graphql-request';

export const queryPostSlugs = gql`
  {
    posts {
      slug
    }
  }
`;
