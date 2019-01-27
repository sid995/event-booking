const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const graphQLSchema = require('./graphql/schema/index')
const graphQLResolvers = require('./graphql/resolvers/index')

const isAuth = require('./middleware/is-auth')

const app = express()

app.use(bodyParser.json())

const PORT = 3000

app.use(isAuth)

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
  })
)

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@eventbooking-soj6p.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
