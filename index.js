const { ApolloServer } = require("apollo-server-express");
const express = require("express");

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
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("./index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
