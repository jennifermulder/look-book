import gql from 'graphql-tag';
// import the gql tagged template literal functionality to create a GraphQL mutation called login that accepts email and password variables
// return user data and token
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($id: ID!) {
    saveBook(bookId: $id) {
      bookId
      authors
      description
      title
      image
      link
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(bookId: $id) {
      
      
      }
    }
  }
`;
