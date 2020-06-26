import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose';
require('dotenv').config(); 

function startServer({ typeDefs, resolvers }){
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const server = new ApolloServer( { typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}

export default startServer;