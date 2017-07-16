webpackJsonp([0],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var angular=__webpack_require__(0),employeesList=angular.module("employeesList",[]).value("storage",{employees:[]}).controller("EmployeesController",__webpack_require__(31));module.exports=employeesList;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),EmployeesController=function(){function e(t,n,a,r){"ngInject";var o=this;_classCallCheck(this,e),angular.extend(this,{$state:t,storage:n,_:a,$scope:r,pageTitle:"Сотрудники"}),this.$scope.$watch(function(){return o.$state.params.empID},function(){var e=o.$state.params.empID,t=o.storage.employees;o.currEmp=o._.find(t,function(t){return t.id===e})})}return e.$inject=["$state","storage","_","$scope"],_createClass(e,[{key:"editEmployee",value:function(e){e===this.currEmp?this.$state.go("employees"):this.$state.go("employees.employee",{empID:e.id})}},{key:"addEmp",value:function(){this.$state.go("employees.add")}}]),e}();module.exports=EmployeesController;

/***/ })

});