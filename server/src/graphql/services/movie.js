import { Movie } from '../../models';
import { parseGenres } from '../../utilities';

class MovieService {
  static getMovieById = async _id => await Movie.findById(_id);

  static getMovies = async where => {
    const { title, director, genre, ...whereClause } = where;
    const parsedGenres = genre && parseGenres(genre);
    const parsedTitle = title && new RegExp(title, 'i');
    const parsedDirector = director && new RegExp(director, 'i');
    const variables = {
      ...whereClause,
      ...(parsedTitle && { title: parsedTitle }),
      ...(parsedDirector && { director: parsedDirector }),
      ...(parsedGenres && { genre: parsedGenres.length > 1 ? parsedGenres : parsedGenres[0] })
    };
    return await Movie.find(variables);
  };

  static createMovie = async input => {
    const { genre, ...movieInput } = input;
    const parsedGenres = genre && parseGenres(genre);
    const newMovieData = { ...movieInput, ...(parsedGenres && { genre: parsedGenres }) };
    return await Movie.create(newMovieData);
  };

  static deleteMovie = async _id => {
    const { deletedCount } = (await Movie.deleteOne({ _id })) || {};
    const [success, status, message] =
      deletedCount === 1 ? [true, 200, 'Movie successfully deleted'] : [false, 500, 'Could not find movie to delete'];
    return { success, status, message };
  };
}

export default MovieService;
