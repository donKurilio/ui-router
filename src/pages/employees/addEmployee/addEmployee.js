angular.module('employeeApp').controller('AddEmployeeController', ['$scope', '$state', 'storage', function ($scope, $state, storage) {
    var vm = this;
    vm.empBuf = {};
    vm.saveEmp = function () {
        vm.empBuf.id = _.max(_.pluck(storage.emps, "id")) + 1;
        storage.emps.push(vm.empBuf);
        $state.go("employees", null, {reload: true});
    };
    vm.cancellEmp = function () {
        $state.go("employees");
    }
}]);