const MovieQuery = `
  type Query {
    movie(id: Int!): Movie
    movies(genre: [Genre]): [Movie]
  }
`;

const MovieType = `
  type Movie {
    id: Int
    title: String
    director: String
    duration: String
    genre: [String]
    rate: String
  }
`;

const MovieEnum = `
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

export default [MovieQuery, MovieType, MovieEnum];
