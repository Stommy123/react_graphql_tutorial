import React from 'react';
import { Route } from 'react-router-dom';
import { ModalContextProvider } from '../context';
import  { Navigation, Modal } from '../components';
import { Home, MovieList, Movie, SearchMovie, NewMovie } from '../pages';

const Content = _ => (
  <>
    <Navigation />
    <ModalContextProvider>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={MovieList} />
      <Route exact path="/movie/:movieId" component={Movie} />
      <Route exact path="/search" component={SearchMovie} />
      <Route exact path="/new_movie" component={NewMovie} />
      <Modal />
    </ModalContextProvider>
  </>
);

export default Content;
