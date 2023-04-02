import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Apollo Server Imports
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';

// GraphQL Schema
import { _typeDefs, _resolvers } from './schema/schema.js'

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

// Apollo Server
export const server = new ApolloServer({
  typeDefs: _typeDefs,
  resolvers: _resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

// Express middleware for Apollo Server
app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }), 
  }),
);

// Connect to MongoDB & start server
await mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log('🥂 Connected to MongoDB')
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
});

