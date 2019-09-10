import { Movie } from '../models';
import { genreMapper } from '../utilities';

const Query = {
  movie: async (_, { _id }) => {
    const movie = await Movie.findById(_id)
    return movie
  },
  movies: async (_, { genre }) => {
    const parsedGenres = genre && genre.map(g => genreMapper(g))
    const variables = { 
      ...(parsedGenres && { genre: parsedGenres.length > 1 ? parsedGenres : parsedGenres[0] })
    }
    const movies = await Movie.find({ ...variables });
    return movies
  }

}

const Mutation = {
  createMovie: async (_, { input }) => await Movie.create(input),
  deleteMovie: async (_, { _id }) => {
    const { deletedCount } = (await Movie.deleteOne({ _id })) || {}
    const [success, status, message] = deletedCount === 1 
    ? [true, 200, 'Movie successfully deleted']
    : [false, 500, 'Could not find movie to delete'] 
    return { success, status, message }
    
  }
}

export default { Query, Mutation };
