import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/typeDefs/typeDefs.mjs';
import resolvers from './graphql/resolvers/post.mjs';
import db from './config/db.mjs';

import dotenv from 'dotenv';

//const dotenv = require ('dotenv')

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

db();

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);