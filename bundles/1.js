webpackJsonp([1],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var angular=__webpack_require__(0),employeesList=angular.module("employeesList.editEmployee",[]).controller("EditEmployeeController",__webpack_require__(21));module.exports=employeesList;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),EditEmployeeController=function(){function e(t,r,s){"ngInject";var n=this;_classCallCheck(this,e),angular.extend(this,{$state:t,storage:r,_:s}),this.emp=this._.find(this.storage.employees,function(e){return e.id===n.$state.params.empID}),this.emp?this.currEmp=angular.copy(this.emp):this.$state.go("^")}return e.$inject=["$state","storage","_"],_createClass(e,[{key:"saveEmp",value:function(){angular.extend(this.emp,this.currEmp),this.$state.go("employees")}},{key:"delEmp",value:function(){var e=this;this.storage.employees=this._.filter(this.storage.employees,function(t){return t.id!==e.currEmp.id}),this.$state.go("^")}}]),e}();module.exports=EditEmployeeController;

/***/ })

});