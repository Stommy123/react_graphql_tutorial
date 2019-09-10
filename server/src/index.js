import express from 'express';
import express_graphql from 'express-graphql';
import { schema } from './schema';
import { rootResolver } from './resolvers';

const app = express();

app.use(
  '/graphql',
  express_graphql({
    schema,
    rootValue: rootResolver,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, _ => console.log('Server is running on port 4000'));
