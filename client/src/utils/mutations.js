import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        // Include other fields you want to retrieve
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String, $password: String) {
    login(username: $username, password: $password) {
      user {
        _id
        username
        // Include other fields you want to retrieve
      }
      token
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $bookInput: BookInput!) {
    saveBook(userId: $userId, bookInput: $bookInput) {
      _id
      username
      savedBooks {
        // Include fields from savedBooks you want to retrieve
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($userId: ID!, $bookId: ID!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      _id
      username
      savedBooks {
        // Include fields from savedBooks you want to retrieve
      }
    }
  }
`;