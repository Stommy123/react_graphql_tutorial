import Movie from './movie';

export const rootResolver = {
  Query: {
    ...Movie.Query
  },
  Mutation: {
    ...Movie.Mutation
  }
};
