import gql from 'graphql-tag';

export const FetchMovie = gql`
  query FetchMovie($_id: String!) {
    movie(_id: $_id) {
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

export const FetchMovies = gql`
  query FetchMovies($where: MovieWhereInput) {
    movies(where: $where) {
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

export const FetchRandomMovie = gql`
  query FetchRandomMovie {
    randomMovie {
      title
      year
      director
      duration
      genre
      rate
    }
  }
`;
