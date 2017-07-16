webpackJsonp([4],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function config(e,t){"ngInject";t.otherwise("/employees"),e.state(__webpack_require__(16)).state(__webpack_require__(19)).state(__webpack_require__(18)).state(__webpack_require__(17))}config.$inject=["$stateProvider","$urlRouterProvider"],module.exports=config;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(2);var angular=__webpack_require__(0);angular.module("employeeApp",[__webpack_require__(6),__webpack_require__(4),__webpack_require__(3)]).config(__webpack_require__(5)).service("_",function(){return __webpack_require__(7)});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var config={name:"about",url:"/about",templateUrl:"src/pages/about/about.tmpl.html",controller:"AboutController",controllerAs:"aboutCtrl",resolve:{loadModule:["$q","$ocLazyLoad",function(e,o){"ngInject";var r=e.defer();return __webpack_require__.e/* require.ensure */(3).then((function(){o.load(__webpack_require__(22)),r.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),r.promise}]}};module.exports=config;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={name:"employees.add",url:"employees-list/add-employee",templateUrl:"src/pages/employees-list/add-employee/add-employee.tmpl.html",controller:"AddEmployeeController",controllerAs:"addEmp",resolve:{loadModule:["$q","$ocLazyLoad",function(e,l){"ngInject";var o=e.defer();return __webpack_require__.e/* require.ensure */(2).then((function(){l.load(__webpack_require__(23)),o.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),o.promise}]}};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={name:"employees.employee",url:"/{empID:int}",templateUrl:"src/pages/employees-list/edit-employee/edit-employee.tmpl.html",controller:"EditEmployeeController",controllerAs:"emp",resolve:{loadModule:["$q","$ocLazyLoad",function(e,l){"ngInject";var o=e.defer();return __webpack_require__.e/* require.ensure */(1).then((function(){l.load(__webpack_require__(24)),o.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),o.promise}]}};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports={name:"employees",url:"/employees",templateUrl:"src/pages/employees-list/employees-list.tpl.html",controller:"EmployeesController",controllerAs:"emps",resolve:{loadModule:["$q","$ocLazyLoad",function(e,o){"ngInject";var l=e.defer();return __webpack_require__.e/* require.ensure */(0).then((function(){o.load(__webpack_require__(25)),l.resolve()}).bind(null, __webpack_require__)).catch(__webpack_require__.oe),l.promise}],employees:["$resource","storage","loadModule",function(e,o,l){"ngInject";return e("employees.json").get().$promise.then(function(e){o.employees=e.employees})}]}};

/***/ })
],[15]);