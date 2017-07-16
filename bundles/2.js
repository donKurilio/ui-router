webpackJsonp([2],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var angular=__webpack_require__(0),addEmployee=angular.module("employeesList.addEmployee",[]).controller("AddEmployeeController",__webpack_require__(20));module.exports=addEmployee;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),AddEmployeeController=function(){function e(t,n,s){"ngInject";_classCallCheck(this,e),angular.extend(this,{$state:t,storage:n,_:s})}return e.$inject=["$state","storage","_"],_createClass(e,[{key:"saveEmp",value:function(){this.currEmp.id=this.storage.employees.length?this._.max(this._.pluck(this.storage.employees,"id"))+1:1,this.storage.employees.push(this.currEmp),this.$state.go("^")}},{key:"cancelEmp",value:function(){this.$state.go("^")}}]),e}();module.exports=AddEmployeeController;

/***/ })

});