import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Icon } from '..';

const Navigation = _ => (
  <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div className="navbar-nav collapse navbar-toggleable-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <Icon icon="bookmark_border" />
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

export default withRouter(Navigation);
