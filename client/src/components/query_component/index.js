import React from 'react';
import { Query } from 'react-apollo';
import { FetchMovie } from '../../graphql/queries';

const QueryComponentExample = _ => (
  <Query query={FetchMovie} fetchPolicy="network-only" variables={{ id: 1 }}>
    {({ data }) => {
      console.log('query component data', data);
      return <div>Query Component Example</div>;
    }}
  </Query>
);

export default QueryComponentExample;
