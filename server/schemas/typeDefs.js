const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    stub: String
  }

  type Mutation {
    stub: String
  }
`;

module.exports = typeDefs;
