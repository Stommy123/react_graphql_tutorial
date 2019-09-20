import React, { useState, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { FetchRandomMovie } from '../../graphql/queries';
import { SectionWrapper, MovieDetails } from '../../components';

const Home = _ => {
  const [movie, setMovie] = useState(null);
  const [executeQuery, { loading, called, data = {} }] = useLazyQuery(FetchRandomMovie, {
    fetchPolicy: 'network-only'
  });
  useEffect(
    _ => {
      !loading && called && setMovie(data.randomMovie);
    },
    [loading, called, data]
  );
  return (
    <SectionWrapper className="text-xs-center">
      <h1 className="display-3">React Graphql Tutorial</h1>
      <p className="lead">
        Check out each route for different examples! Or in a hurry? Just press the button to get a random movie
      </p>
      <button onClick={executeQuery} className="btn btn-info-outline btn-lg m-t-1">
        Randomize Movie
      </button>
      {movie && <MovieDetails {...movie} />}
    </SectionWrapper>
  );
};

export default Home;
