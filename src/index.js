const angular = require('angular');
require('oclazyload');
angular.module('employeeApp',
    [
        require('oclazyload'),
        require('angular-ui-router'),
        require('angular-resource')
    ])
    .config(require('./app.config'))
    .service('_', function () {
        return require('underscore');
    });
