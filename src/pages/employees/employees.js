app.controller('EmployeesController', ['$scope', '$state', 'storage', function ($scope, $state, storage) {
    var vm = this;
    vm.pageTitle = "Сотрудники";
    vm.employees = storage.emps;
    $scope.curPersId = false;
    vm.editEmployee = function (id) {
        if (id === $scope.curPersId) $state.go('employees');
        else $state.go('employees.employee', {"empID": id});
    };
    vm.addEmp = function() {
        $state.go('employees.add');
    }
}]);