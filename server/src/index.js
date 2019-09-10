import express from 'express';
import express_graphql from 'express-graphql';
import mongoose from 'mongoose';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import { schema } from './graphql';

const app = express();
mongoose.connect('mongodb://localhost:27017/graphql_movies');
const db = mongoose.connection
const MongoStore = connectMongo(session);

app.use(
  session({
    secret: 'hello world',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db })
  })
)

app.use(
  '/graphql',
  express_graphql({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, _ => console.log('Server is running on port 4000'));
