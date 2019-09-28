import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-client-preset';

const link = new HttpLink({ uri: '/graphql' });
const cache = new InMemoryCache({ addTypename: false });

export default new ApolloClient({ link, cache });
