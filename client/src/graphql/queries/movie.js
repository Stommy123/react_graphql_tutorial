import gql from 'graphql-tag';

export const FetchMovie = gql`
  query FetchMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      director
      duration
      rate
      genre
    }
  }
`;

export const FetchMovies = gql`
  query FetchMovies($genre: [Genre]) {
    movies(genre: $genre) {
      id
      title
      director
      duration
      rate
      genre
    }
  }
`;
