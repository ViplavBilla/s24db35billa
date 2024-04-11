var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var EmployeeRouter = require('./routes/Employee');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');


var app = express();
var employee = require("./models/Employee");



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Employee',EmployeeRouter);
app.use('/grid',gridRouter);
app.use('/pick',pickRouter);
app.use('/resource',resourceRouter);




const connectionString = 'mongodb+srv://viplavbilla543:viplavbilla@cluster0.kacbdu5.mongodb.net/';
mongoose = require('mongoose');
mongoose.connect(connectionString);


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed onserver start
async function recreateDB(){
// Delete everything
await employee.deleteMany();
let instance1 = new
employee({empid:1, empname:'vip',
empdept:'testing'});
instance1.save().then(doc=>{
console.log("First object saved")})

let instance2 = new
employee({empid:2, empname:'viplav',
empdept:'testing'});
instance2.save().then(doc=>{
console.log("Second object saved")})

let instance3 = new
employee({empid:3, empname:'billa',
empdept:'developer'});
instance3.save().then(doc=>{
console.log("Third object saved");}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
