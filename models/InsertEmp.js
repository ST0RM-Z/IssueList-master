require('./db');
const Emp = require('./emps')

const tempEmp = [{ 
  id:"1",
  firstname:"Dhairya",
  lastname:"Arya",
  age:"20",
  dateofjoining:new Date('12-01-1000'),
  title:"Test",
  employeetype:"Full-Time",
  currentstatus:"1",
  department:"IT"
 }]

Emp.insertMany(tempEmp)
    .then(function(data){
        console.log("Data", data)
})
