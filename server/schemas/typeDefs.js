const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }

type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    login(_id: ID, username: String, password: String!): Auth
    saveBook(userId: ID!, bookInput: BookInput!): User
    deleteBook(userId: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;
