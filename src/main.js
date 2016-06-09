angular.module('employeeApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('employees', {
                resolve: {
                    config: function (employeesResource) {
                        return employeesResource.$promise;
                    },
                    employees: function (config) {
                        return config.employees
                    }
                },
                url: '/',
                templateUrl: 'src/pages/employees/employees.html',
                controller: 'EmployeesController',
                controllerAs: 'tableEmps'
            })
            .state('employees.employee', {
                url: 'employee:employeeId',
                templateUrl: 'src/pages/employees/employee/employee.html',
                controller: 'EditEmployeeController',
                controllerAs: 'editEmp'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'src/pages/about/about.html',
                controller: 'AboutController as aboutCtrl'
            })
    })
    .factory('employeesResource', ['$resource', function ($resource) {
        return $resource('employees.json').get();
    }]);
