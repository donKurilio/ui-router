angular.module('employeeApp').controller('EmployeesController', ['$scope', '$state', 'employees', function ($scope, $state, employees) {
    var vm = this;
    vm.pageTitle = "Сотрудники";
    vm.employees = employees;
    $scope.$state = $state;
    $scope.$watch('$state.params.employeeId', function (newValue, oldValue) {
        vm.curPersId = parseInt(newValue);
    });
    vm.editEmployee = function (id) {
        vm.curPersId = id;
        $state.go('employees.employee', {"employeeId": id});
    }
}]);