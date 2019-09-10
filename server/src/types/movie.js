const Query = `
  type Query {
    movie(_id: String): Movie
    movies(genre: [Genre]): [Movie]
  }
`;

const Mutation = `
  type Mutation {
    createMovie(input: MovieInput!): Movie
    deleteMovie(_id: String): DeleteMovieResponse
  }
`

const Type = `
  type Movie {
    _id: String
    title: String
    year: String
    director: String
    duration: String
    genre: [String]
    rate: String
  }
`;

const Input = `
  input MovieInput {
    title: String!, 
    year: String!, 
    director: String!, 
    duration: String!, 
    genre: [String]!,
    rate: String,
  }
`

const Response = `
  type DeleteMovieResponse {
    success: Boolean
    status: Int
    message: String
  }
`

const Enum = `
  enum Genre {
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

export default [Query, Mutation, Type, Input, Response, Enum];
