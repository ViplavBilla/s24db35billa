var express = require('express');
const employee_controlers= require('../controllers/Employee');
var router = express.Router();

/* GET employee */
router.get('/', employee_controlers.employee_view_all_Page );

/* GET home page. */
// router.get('/', function(req, res, next) {
// //   res.render('employee', { title: 'Search Results Employee' });
// // });

module.exports = router;




