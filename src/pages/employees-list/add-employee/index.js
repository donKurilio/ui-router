let angular = require('angular'),
    addEmployee = angular.module('employeesList.addEmployee', [])
        .controller('AddEmployeeController', require('./add-employee.ctrl'));
module.exports = addEmployee;