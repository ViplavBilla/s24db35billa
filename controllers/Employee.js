var employee = require('../models/Employee');
// List of all employee
exports.employee_list = function(req, res) {
res.send('NOT IMPLEMENTED: Employee list');
};
// for a specific employee.
exports.employee_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
};
// Handle employee create on POST.
exports.employee_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Employee create POST');
};
// Handle employee delete from on DELETE.
exports.employee_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
};
// Handle employees update form on PUT.
exports.employee_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
};

//List of all employees
exports.employee_list = async function(req, res) {
try{
theEmployees = await employee.find();
res.send(theEmployees);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// VIEWS
// Handle a show all view
exports.employee_view_all_Page = async function(req, res) {
    // let theEmployee;
    try{
    theEmployee = await employee.find();
    res.render('employee', { title: 'Employee Search Results', results: theEmployee });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    // Handle employee create on POST.
exports.employee_create_post = async function(req, res) {
    console.log(req.body)
    let document = new employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.empid= req.body.empid;
    document.empname = req.body.empname;
    document.empdept = req.body.empdept;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Costume.
exports.employee_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await employee.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};


// Handle Costume update form on PUT.
exports.employee_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await employee.findById( req.params.id)
// Do updates of properties
if(req.body.empid)
toUpdate.empid = req.body.empid;
if(req.body.empname) toUpdate.empname = req.body.empname;
if(req.body.empdept) toUpdate.empdept = req.body.empdept;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle Costume delete on DELETE.
exports.employee_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await employee.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

    
    


