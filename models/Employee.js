const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
empid:{ 
    type:Number,
    required: true,
    min: 1,
    max: 1000,
},
empname: { 
    type:String,
    required: true,
    min: 3,
    max: 1000,
},
empdept:{ 
    type:String,
    required: true,
    min: 3,
    max: 1000,
},
});
module.exports = mongoose.model("employee",
employeeSchema)