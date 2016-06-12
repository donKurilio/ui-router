angular.module('employeeApp').controller('EmployeesController', ['$scope', '$state', 'storage', function ($scope, $state, storage) {
    var vm = this;
    vm.pageTitle = "Сотрудники";
    vm.employees = storage.emps;
    $scope.curPersId = ($state.params.employeeId) ? parseInt($state.params.employeeId) : false;
    vm.editEmployee = function (id) {
        if (id === $scope.curPersId) {
            $scope.curPersId = false;
            $state.go('employees');
        }
        else {
            $scope.curPersId = id;
            $state.go('employees.employee', {"employeeId": id});
        }
    };
    vm.addEmp = function() {
        $scope.curPersId = false;
        $state.go('employees.add');
    }
}]);