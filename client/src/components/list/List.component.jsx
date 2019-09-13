import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const List = ({ movies = [], className }) => (
  <div>
    <div className={classNames('movies-list', className)}>
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
