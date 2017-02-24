const angular = require('angular');

const employeesList = angular.module('about', [])
    .controller('AboutController', require('./about.ctrl'));
module.exports = employeesList;