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
