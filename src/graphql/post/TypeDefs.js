import { gql } from 'apollo-server-core';
export const posTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
  }
`;
