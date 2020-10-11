// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
// define a query = type Query {}
// Reaction type nested in Thought
//! = data must exist
// mutation - will return a user object, either user who logged in or signed up
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  bookId: ID
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Query {
  me: User
}

type Auth {
  token: ID!
  user: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
}

input BookInput {
  authors: [String]
  description: String!
  bookId: String
  image: String 
  link: String
  title: String!
}
`;

// export the typeDefs
module.exports = typeDefs;