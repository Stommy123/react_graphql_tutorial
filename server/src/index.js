import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import session from 'express-session';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectMongo from 'connect-mongo';
import { typeDefs } from './graphql/types';
import { rootResolver as resolvers } from './graphql/resolvers/';

dotenv.config();

const app = express();
mongoose.connect(process.env.DB);
const db = mongoose.connection;
const MongoStore = connectMongo(session);

app.use(
  session({
    secret: 'hello world',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db })
  })
);

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, _ => console.log(`Listening on port ${PORT}/graphql`));
