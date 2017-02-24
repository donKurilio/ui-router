let angular = require('angular'),
    employeesList = angular.module('employeesList.editEmployee', [])
        .controller('EditEmployeeController', require('./edit-employee.ctrl'));
module.exports = employeesList;