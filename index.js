const { ApolloServer } = require("apollo-server");
const mongoose = require('mongoose')


const { MONGODB } = require('./config')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})


mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MONGODB CONNECTED: ')
    return server.listen({ port: '4000' })
  })
  .then(res => {
    console.log('Server Running at port: ', res.url)
  })
  .catch(err => {
    console.log('err: ', err)
  })