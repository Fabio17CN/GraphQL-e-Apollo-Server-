import { gql } from 'apollo-server-core';
import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';
import { posTypeDefs } from './post/TypeDefs';
import { postResolvers } from './post/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, posTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
