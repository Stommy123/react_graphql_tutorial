import { Movie } from '../../models';
import { parseGenres } from '../../utilities';

class MovieService {
  static getMovieById = async _id => await Movie.findById(_id);

  static getMovies = async where => {
    const { title, director, genre, ...whereClause } = where;
    const parsedTitle = title && new RegExp(title.trim(), 'i');
    const parsedDirector = director && new RegExp(director.trim(), 'i');
    const variables = {
      ...whereClause,
      ...(parsedTitle && { title: parsedTitle }),
      ...(parsedDirector && { director: parsedDirector }),
      ...(genre && { genre: parseGenres(genre) })
    };
    return await Movie.find(variables);
  };

  static getRandomMovie = async _ => {
    const [movie] = await Movie.aggregate([{ $sample: { size: 1 } }]);
    return movie;
  };

  static createMovie = async input => {
    const { genre, ...movieInput } = input;
    const newMovieData = { ...movieInput, ...(genre && { genre: parseGenres(genre) }) };
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
