import { MovieService } from '../services';

const Query = {
  movie: async (_, { _id }) => await MovieService.getMovieById(_id),
  movies: async (_, { where = {} }) => await MovieService.getMovies(where),
  randomMovie: async _ => await MovieService.getRandomMovie()
};

const Mutation = {
  createMovie: async (_, { input = {} }) => await MovieService.createMovie(input),
  deleteMovie: async (_, { _id }) => await MovieService.deleteMovie(_id),
  accessCache: _ => true,
};

export default { Query, Mutation };
