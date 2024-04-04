var employee = require('../models/Employee');
// List of all Costumes
exports.employee_list = function(req, res) {
res.send('NOT IMPLEMENTED: Employee list');
};
// for a specific Costume.
exports.employee_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.employee_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Employee create POST');
};
// Handle Costume delete from on DELETE.
exports.employee_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.employee_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
};

//List of all Costumes
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


    // Handle Costume create on POST.
exports.employee_create_post = async function(req, res) {
    console.log(req.body)
    let document = new employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
    
    


