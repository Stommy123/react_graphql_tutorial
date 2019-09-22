const regexArray = string =>
  string
    .replace(/[\W_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([a-z])/g, '$1$2')
    .replace(/([_0-9])([a-zA-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])([_0-9])/g, '$1 $2')
    .split(' ');

export const constCase = string => {
  const arr = regexArray(string);
  return arr.reduce((result, word) => {
    const formatedWord = word.toUpperCase();
    if (result) return word ? result + '-' + formatedWord : result;
    return formatedWord;
  }, String());
};

export const isArray = a => Object.prototype.toString.call(a) == "[object Array]";

export const genreMapper = genre =>
  ({
    ACTION: 'Action',
    ADVENTURE: 'Adventure',
    ANIMATION: 'Animation',
    BIOGRAPHY: 'Biography',
    COMEDY: 'Comedy',
    CRIME: 'Crime',
    DRAMA: 'Drama',
    FAMILY: 'Family',
    FANTASY: 'Fantasy',
    HISTORY: 'History',
    HORROR: 'Horror',
    MUSIC: 'Music',
    MUSICAL: 'Musical',
    MYSTERY: 'Mystery',
    ROMANCE: 'Romance',
    SCI_FI: 'Sci-Fi',
    THRILLER: 'Thriller',
    WAR: 'War',
    WESTERN: 'Western'
  }[genre]);

export const parseGenres = (genres = []) => genres.length > 1 ? genres.map(g => genreMapper(g)).sort((a, b) => a.localeCompare(b)) : genreMapper(genres[0]);
