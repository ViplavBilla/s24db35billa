const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
empid: Number,
empname: String,
empdept: String
})
module.exports = mongoose.model("employee",
employeeSchema)