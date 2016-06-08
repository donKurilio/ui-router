angular.module('employeeApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('employees', {
                resolve: {
                    employees: function(employeesResource){
                        return employeesResource.get().$promise;
                    }
                },
                url: '/',
                templateUrl: 'pages/employees/index.html',
                controller: 'EmployeesController',
                controllerAs: 'empController'
            })
            .state('employees.employee', {
                url: 'employee/id:employeeId',
                templateUrl: 'pages/employees/employee/index.html',
                controller: 'EditEmployeeController',
                controllerAs: 'editEmp'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'pages/about/index.html'
            })
    })
    .factory('employeesResource', ['$resource', function($resource) {
        return $resource('employees.json');
    }])
    .controller('rootController', function ($scope) {
        $scope.pageTitle = "Сотрудники"
    })
    .controller('EmployeesController', ['$scope', '$state', 'employees', function ($scope, $state, employees) {

        var vm = this;
        vm.employees = employees.employees;
        vm.editEmployee = function (id) {
            $state.go('employees.employee', {"employeeId": id});
        }
    }])
    .controller('EditEmployeeController', ['$scope', '$stateParams', 'employees', function ($scope, $stateParams, employees) {
        var vm = this;
        var emp = _.find(employees.employees, function (obj) {
            return obj.id === parseInt($stateParams.employeeId);
        });
        var id = _.indexOf(employees.employees,emp);
        vm.empBuf = angular.copy(emp);
        vm.saveEmp = function () {
            employees.employees[id] = angular.copy(vm.empBuf);
        }
    }]);
