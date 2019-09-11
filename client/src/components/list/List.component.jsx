import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ movies = [] }) => (
  <div>
    <div className="movies-list">
      {movies.map(({ _id, title, rate }) => (
        <div className="list-item" key={_id}>
          <Link to={`/movie/${_id}`}>
            {title} - {rate}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default List;
