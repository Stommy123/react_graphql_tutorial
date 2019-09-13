import React from 'react';
import classNames from 'classnames';

const MovieDetails = ({ className, title, director, year, genre = [], rate }) => (
  <div className={classNames('movie-details', className)}>
    <p>Title: {title}</p>
    <p>Director: {director} </p>
    <p>Year: {year}</p>
    <p>Genre: {genre.join(', ')}</p>
    <p>Rate: {rate}</p>
  </div>
);

export default MovieDetails;
