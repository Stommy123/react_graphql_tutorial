import React, { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from 'react-apollo';
import { FetchRandomMovie } from '../../graphql/queries';
import { AccessCache } from '../../graphql/mutations';
import { SectionWrapper, MovieDetails } from '../../components';

const Home = _ => {
  const [movie, setMovie] = useState(null);
  const [executeQuery, res] = useLazyQuery(FetchRandomMovie);
  const { loading, called, data = {}, refetch } = res;
  const bustCache = ({ data: cache }) => {
    const cacheData = cache.data;
    Object.keys(cacheData).forEach(key => key.includes('randomMovie') && cache.delete(key));
  };
  const [executeMutation] = useMutation(AccessCache, { update: bustCache });
  useEffect(
    _ => {
      !loading && called && setMovie(data.randomMovie);
    },
    [data, loading, called]
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
      <button onClick={executeMutation} className="btn btn-info-outline btn-lg m-t-1">
        Bust Cache
      </button>
      <button onClick={_ => refetch && refetch({})} className="btn btn-info-outline btn-lg m-t-1">
        Refetch
      </button>
      {movie && <MovieDetails {...movie} />}
    </SectionWrapper>
  );
};

export default Home;
