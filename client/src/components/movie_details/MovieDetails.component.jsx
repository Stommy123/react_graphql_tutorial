import React from 'react';

const MovieDetails = ({ title, director, year, genre = [], rate }) => (
  <div>
    <p>Title: {title}</p>
    <p>Director: {director} </p>
    <p>Year: {year}</p>
    <p>Genre: {genre.join(', ')}</p>
    <p>Rate: {rate}</p>
  </div>
)

export default MovieDetails