import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import client from './client';
import Content from '../content';

const App = _ => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Content />
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
