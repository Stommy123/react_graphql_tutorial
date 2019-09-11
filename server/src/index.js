import express from 'express';
import dotenv from 'dotenv';
import express_graphql from 'express-graphql';
import mongoose from 'mongoose';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import { schema } from './graphql';

dotenv.config();
const MONGO_DB = process.env.DB;

const app = express();
mongoose.connect(MONGO_DB);
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

app.use(
  '/graphql',
  express_graphql({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, _ => console.log('Server is running on port 4000'));
