angular.module('employeeApp').controller('EditEmployeeController', ['$scope', '$state', 'employees', function ($scope, $state, employees) {
    var vm = this;
    vm.curId = parseInt($state.params.employeeId);
    var emp = _.find(employees, function (obj) {
        return obj.id === vm.curId;
    });
    var id = _.indexOf(employees, emp);
    vm.empBuf = angular.copy(emp);
    vm.saveEmp = function () {
        employees[id] = angular.copy(vm.empBuf);
    };

}]);