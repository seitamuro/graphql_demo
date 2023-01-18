const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema")
const resolvers = require("./resolver")

const app = express()

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

const port = process.env.PORT || 4200;

app.listen(port);

console.log(`server ready at http://localhost:${port}/graphql`)