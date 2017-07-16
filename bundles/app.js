webpackJsonp([4],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function config(e,t){"ngInject";t.otherwise("/employees"),e.state(__webpack_require__(10)).state(__webpack_require__(13)).state(__webpack_require__(12)).state(__webpack_require__(11))}config.$inject=["$stateProvider","$urlRouterProvider"],module.exports=config;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(1);var angular=__webpack_require__(0);angular.module("employeeApp",[__webpack_require__(5),__webpack_require__(3),__webpack_require__(2)]).config(__webpack_require__(4)).service("_",function(){return __webpack_require__(6)});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var config={name:"about",url:"/about",templateUrl:"src/pages/about/about.tmpl.html",controller:"AboutController",controllerAs:"aboutCtrl",resolve:{loadModule:["$q","$ocLazyLoad",function(e,o){"ngInject";var r=e.defer();return __webpack_require__.e/* require.ensure */(3).then((function(){o.load(__webpack_require__(15)),r.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),r.promise}]}};module.exports=config;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={name:"employees.add",url:"employees-list/add-employee",templateUrl:"src/pages/employees-list/add-employee/add-employee.tmpl.html",controller:"AddEmployeeController",controllerAs:"addEmp",resolve:{loadModule:["$q","$ocLazyLoad",function(e,l){"ngInject";var o=e.defer();return __webpack_require__.e/* require.ensure */(2).then((function(){l.load(__webpack_require__(16)),o.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),o.promise}]}};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={name:"employees.employee",url:"/{empID:int}",templateUrl:"src/pages/employees-list/edit-employee/edit-employee.tmpl.html",controller:"EditEmployeeController",controllerAs:"emp",resolve:{loadModule:["$q","$ocLazyLoad",function(e,l){"ngInject";var o=e.defer();return __webpack_require__.e/* require.ensure */(1).then((function(){l.load(__webpack_require__(17)),o.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),o.promise}]}};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={name:"employees",url:"/employees",templateUrl:"src/pages/employees-list/employees-list.tpl.html",controller:"EmployeesController",controllerAs:"emps",resolve:{loadModule:["$q","$ocLazyLoad",function(e,o){"ngInject";var l=e.defer();return __webpack_require__.e/* require.ensure */(0).then((function(){o.load(__webpack_require__(18)),l.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),l.promise}],employees:["$resource","storage","loadModule",function(e,o,l){"ngInject";return e("employees.json").get().$promise.then(function(e){o.employees=e.employees})}]}};

/***/ })
],[9]);