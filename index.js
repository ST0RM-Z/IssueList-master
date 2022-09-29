const express = require("express");
const { ApolloServer } = require("apollo-server-express");


const app = express();
const PORT = 3000;


// ---------------graphql -------------------
    const typeDefs = `
    type issue{
      Id:String!
      Status:String!
      Owner:String!
      effort:Int
      Created:String
      Due:String
      Title:String

    }
      type Query {
        about: String!
        issueList: [issue]
      }
      type Mutation {
        setAboutMessage(message: String!): String
      }

   
    `;
const aboutMessage = "hello i am just developer";
const tempIssues = [{ Id: 1, Owner: "Person-B", effort: 10, Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }, { Id: 2, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-22"), Status: "Resolved", Title: "this is 2nd issue" }, { Id: 3, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 3rd issue" }, { Id: 4, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 4th issue" }, { Id: 5, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 5th issue" }, { Id: 6, Owner: "Person-A", effort: 10,Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 6th issue" }]

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}
    const resolvers = {
      Query: {
        about: () => aboutMessage,
        issueList
      },
      Mutation: {
        setAboutMessage,
      },
    };

   function issueList(){
    return tempIssues;
    
   }

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
