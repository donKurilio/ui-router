app.controller('EditEmployeeController', ['$scope', '$state', 'storage', function ($scope, $state, storage) {
    var vm = this;
    vm.curID = parseInt($state.params.empID);
    $scope.$parent.curPersId = vm.curID;
    var emp = _.find(storage.emps, function (obj) {
        return obj.id === vm.curID;
    });
    if (emp) vm.empBuf = angular.copy(emp);
    vm.saveEmp = function () {
        _.each(vm.empBuf, function (value, key) {
            emp[key] = value;
        });
    };
    vm.delEmp = function () {
        storage.emps = _.reject(storage.emps, function (obj) {
            return obj.id === vm.empBuf.id;
        });
        $state.go('^', null, {reload: true});
    }
    $scope.$on('$destroy', function () {
        $scope.$parent.curPersId = false;
    })
}]);