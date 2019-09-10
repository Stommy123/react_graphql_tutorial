import React, { useEffect, useCallback } from 'react';
import { withApollo } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';

const WithApolloExample = ({ client }) => {
  const fetchMovies = async _ => {
    const { data } = await client.query({ query: FetchMovies });
    console.log('with apollo data', data);
  };
  const mountEffect = useCallback(fetchMovies, []);
  useEffect(
    _ => {
      mountEffect();
    },
    [mountEffect]
  );
  return <div>With Apollo Example</div>;
};

export default withApollo(WithApolloExample);
