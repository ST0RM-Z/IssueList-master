const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const EmpSchema = new Schema({
    id:String,
    firstname:String,
    lastname:String,
    age:Number,
    dateofjoining:Date,
    title:String,
    department:String,
    employeetype:String,
    currentstatus:Number,
});

const Emp = mongoose.model('Emp', EmpSchema, "emps");
module.exports = Emp;