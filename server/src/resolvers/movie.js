import { movieData } from '../data';
import { constCase } from '../utilities';

const resolver = {
  Query: {
    movie: (_, { id }) => movieData.find(movie => movie.id === id),
    movies: (_, { genre: genres = [] }) => {
      return genres.length
        ? movieData.filter(movie => {
            const parsedGenres = movie.genre.map(genre => constCase(genre));
            return genres.every(genre => parsedGenres.includes(genre));
          })
        : movieData;
    }
  }
};

export default resolver;
