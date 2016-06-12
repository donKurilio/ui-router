angular.module('employeeApp').controller('EditEmployeeController', ['$scope', '$state', 'storage', function ($scope, $state, storage) {
    var vm = this;
    vm.curId = parseInt($state.params.employeeId);
    $scope.$parent.curPersId = vm.curId;
    var emp = _.find(storage.emps, function (obj) {
        return obj.id === vm.curId;
    });
    vm.empBuf = angular.copy(emp);
    vm.saveEmp = function () {
        storage.emps = _.map(storage.emps, function (obj) {
            return obj.id === vm.empBuf.id ? vm.empBuf : obj;
        });
        $state.reload();
    };
    vm.delEmp = function() {
        storage.emps = _.reject(storage.emps, function (obj) {
            return obj.id === vm.empBuf.id;
        });
        $state.reload();
    }

}]);