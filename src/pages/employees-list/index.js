let angular = require('angular'),
    employeesList = angular.module('employeesList',[])
        .value('storage', {
            employees: []
        })
        .controller('EmployeesController', require('./employees-list.ctrl'));
module.exports = employeesList;