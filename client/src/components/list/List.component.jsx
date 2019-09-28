import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { EmptyContent } from '..';

const List = ({ movies = [], className }) => (
  <div>
    {movies.length ? (
      <div className={classNames('movies-list', className)}>
        {movies.map(({ _id, title, rate }) => (
          <div className="list-item" key={_id}>
            <Link to={`/movie/${_id}`}>
              {title} - {rate}
            </Link>
          </div>
        ))}
      </div>
    ) : (
      <EmptyContent text="There are no movies to show" subText=" please adjust your filter or create a new one!" />
    )}
  </div>
);

export default List;
