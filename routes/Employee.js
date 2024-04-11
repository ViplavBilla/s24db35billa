var express = require('express');
const employee_controlers= require('../controllers/Employee');
var router = express.Router();

/* GET employee */
router.get('/', employee_controlers.employee_view_all_Page );

/* GET home page. */
// router.get('/', function(req, res, next) {
// //   res.render('employee', { title: 'Search Results Employee' });
// // });
/* GET detail employee page */
router.get('/detail', employee_controlers.employee_view_one_Page);

/* GET create employee page */
router.get('/create', employee_controlers.employee_create_Page);

/* GET create update page */
router.get('/update', employee_controlers.employee_update_Page);


module.exports = router;




