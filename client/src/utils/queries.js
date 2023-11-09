import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($_id: ID, $username: String) {
    me(_id: $_id, username: $username) {
      _id
      username
      // Include other fields you want to retrieve
    }
  }
`;
