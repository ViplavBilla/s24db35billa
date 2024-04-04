var express = require('express');
var router = express.Router();
// Require employee modules.
var api_controller = require('../controllers/api');
var employee_controller = require('../controllers/Employee');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// employee ROUTES ///
// POST request for creating a employee.
router.post('/employees', employee_controller.employee_create_post);
// DELETE request to delete employee.
router.delete('/employees/:id', employee_controller.employee_delete);
// PUT request to update employee.
router.put('/employees/:id', employee_controller.employee_update_put);
// GET request for one employee.
router.get('/employees/:id', employee_controller.employee_detail);
// GET request for list of all employee items.
router.get('/employees', employee_controller.employee_list);
module.exports = router;