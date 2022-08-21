import { ApolloServer } from 'apollo-server';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';
import { initDataSources } from '../data-sources';
import * as dovenv from 'dotenv'

dovenv.config();

const PORT = process.env.PORT || 4500;

const server = new ApolloServer({
    cors: true,
    typeDefs,
    resolvers,
    context: (({req}) => ({req}))
});

server.listen(PORT, async() => {
    await initDataSources({mongoose: {
        mongoUrl: process.env.MONGO_URL
    }})
    console.log(`Server running at http://localhost:${PORT}`)
});