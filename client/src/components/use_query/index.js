import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { FetchMovies } from '../../graphql/queries';

const UseQueryExample = _ => {
  const { data } = useQuery(FetchMovies, {
    variables: { genre: ['ACTION', 'ADVENTURE'] },
    fetchPolicy: 'network-only'
  });
  console.log('use query data', data);
  return <div>Use Query Example</div>;
};

export default UseQueryExample;
