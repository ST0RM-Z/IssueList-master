const express = require("express");
require('./models/db')
const Emp = require('./models/emps');
const { ApolloServer } = require("apollo-server-express");


const app = express();
const PORT = 3000;


// ---------------graphql -------------------
    const typeDefs = `
    input inputEmp { 
  
    firstname: String!,
    lastname: String!,
    age: Int!,
    dateofjoining: String!,
    title: String!,
    department: String!,
    employeetype: String!
   
    }
    type Emp{
      _id:ID!,
      firstname:String,
      lastname:String,
      age:Int,
      dateofjoining:String,
      title:String,
      department:String,
      employeetype:String,
      currentstatus:Int,

    }
      type Query {
      
        empList: [Emp]
      }
      type Mutation {
        storeEmployeeToDatabase(firstname:String,lastname: String!,age:Int!,dateofjoining:String,title:String,department:String,employeetype:String,currentstatus:Int): Emp
      }

   
    `;

 
    async function storeEmployeeToDatabase(_,{
    
      firstname,
      lastname,
      age,
      dateofjoining,
      title,
      department,
      employeetype,
      currentstatus,
    })
    {
      return new Emp({
    
        firstname,
        lastname,
        age,
        dateofjoining,
        title,
        department,
        employeetype,
        currentstatus,
      }).save();
  }
    const resolvers = {
      Query: {
       
        empList
      },
      Mutation: {
        storeEmployeeToDatabase
      },
    };
    async function empList() {
      // return tempIssues;
      return await Emp.find({})
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
