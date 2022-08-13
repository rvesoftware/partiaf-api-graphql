import { ApolloServer } from 'apollo-server'
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';

const PORT = 4500;


const server = new ApolloServer({
    cors: true,
    typeDefs,
    resolvers,
    context: (({req}) => ({req}))
});



server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})