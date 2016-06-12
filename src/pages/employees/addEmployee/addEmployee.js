app.controller('AddEmployeeController', ['$state', 'storage', function ($state, storage) {
    var vm = this;
    vm.saveEmp = function () {
        vm.empBuf.id = _.max(_.pluck(storage.emps, "id")) + 1;
        storage.emps.push(vm.empBuf);
        $state.go("^");
    };
    vm.cancelEmp = function () {
        $state.go("^");
    }
}]);