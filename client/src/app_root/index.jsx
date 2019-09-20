import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import Content from '../content';

const App = _ => (
  <ApolloProvider client={client}>
    <Router>
      <Content />
    </Router>
  </ApolloProvider>
);

export default App;
