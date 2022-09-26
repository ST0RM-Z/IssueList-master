const express = require("express");
const { ApolloServer } = require("apollo-server-express");


const app = express();
const PORT = 3000;


// ---------------graphql -------------------
    const typeDefs = `
      type Query {
        about: String!
      }
      type Mutation {
        setAboutMessage(message: String!): String
      }
    `;
const aboutMessage = "hello i am just developer";
function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}
    const resolvers = {
      Query: {
        about: () => aboutMessage,
      },
      Mutation: {
        setAboutMessage,
      },
    };

   

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.start().then(()=>{
  server.applyMiddleware({ app, path: '/graphql',cors:true });

})

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("./index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
