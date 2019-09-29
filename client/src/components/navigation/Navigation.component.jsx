import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '..';

const Navigation = _ => (
  <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div className="navbar-nav collapse navbar-toggleable-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <Icon icon="local_movies" />
          IMDB Mock
        </NavLink>
        <div className="nav-items clearfix">
          <NavLink className="nav-item nav-link" to="/movies">
            All Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search Movie
          </NavLink>
          <NavLink className="nav-item nav-link" to="/new_movie">
            New Movie
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
