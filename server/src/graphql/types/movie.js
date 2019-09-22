import { gql } from 'apollo-server-express';

export default gql`
  type Movie {
    _id: String
    title: String
    year: String
    director: String
    duration: String
    genre: [String]
    rate: String
  }

  type Query {
    movie(_id: String!): Movie
    movies(where: MovieWhereInput): [Movie]
    randomMovie: Movie
  }

  type Mutation {
    createMovie(input: NewMovieInput!): Movie
    deleteMovie(_id: String!): DeleteMovieResponse
  }

  input MovieWhereInput {
    title: String
    year: String
    director: String
    genre: [GenreEnum]
  }
  input NewMovieInput {
    title: String!
    year: String!
    director: String!
    duration: String!
    genre: [GenreEnum]!
    rate: String
  }

  type DeleteMovieResponse {
    success: Boolean
    status: Int
    message: String
  }

  enum GenreEnum {
    ACTION
    ADVENTURE
    ANIMATION
    BIOGRAPHY
    COMEDY
    CRIME
    DRAMA
    FAMILY
    FANTASY
    HISTORY
    HORROR
    MUSIC
    MUSICAL
    MYSTERY
    ROMANCE
    SCI_FI
    THRILLER
    WAR
    WESTERN
  }
`;
