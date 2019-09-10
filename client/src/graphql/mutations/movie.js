import gql from 'graphql-tag';

export const CreateMovie = gql`
  mutation CreateMovie($input: NewMovieInput!) {
    createMovie(input: $input) {
      _id
      title 
      year 
      director 
      duration 
      genre
      rate
    }
  }
`;

export const DeleteMovie = gql`
  mutation DeleteMovie($_id: String!) {
    deleteMovie(_id: $_id) {
      status 
      message
    } 
  }
`;