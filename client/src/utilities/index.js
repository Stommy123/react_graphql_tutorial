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


export const isString = s => typeof s === 'string';