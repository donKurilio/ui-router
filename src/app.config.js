function config($stateProvider, $urlRouterProvider) {
    "ngInject";
    $urlRouterProvider.otherwise('/employees');
    $stateProvider
        .state(require('./pages/about/about.states'))
        .state(require('./pages/employees-list/employees-list.states.js'))
        .state(require('./pages/employees-list/edit-employee/edit-employee.states'))
        .state(require('./pages/employees-list/add-employee/add-employee.states'))
}
module.exports = config;