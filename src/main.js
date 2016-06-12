var app = angular.module('employeeApp', ['ui.router', 'ngResource']);
app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('employees', {
                url: '/',
                templateUrl: 'src/pages/employees/employees.html',
                controller: 'EmployeesController',
                controllerAs: 'tableEmps'
            })
            .state('employees.employee', {
                url: 'employees/id_:empID',
                templateUrl: 'src/pages/employees/employee/employee.html',
                controller: 'EditEmployeeController',
                controllerAs: 'editEmp'
            })
            .state('employees.add', {
                url: 'employees/addEmployee',
                templateUrl: 'src/pages/employees/addEmployee/addEmployee.html',
                controller: 'AddEmployeeController',
                controllerAs: 'addEmp'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'src/pages/about/about.html',
                controller: 'AboutController as aboutCtrl'
            })
    })
    .value('storage', {})
    .run(['storage', '$resource', function (storage, $resource) {
        $resource('employees.json').get(function (data) {
            storage.emps = data.employees;
        });
    }]);
