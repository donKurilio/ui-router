class EmployeesController {
    constructor($state, storage, _, $scope) {
        angular.extend(this, {$state, storage, _, $scope, pageTitle: "Сотрудники"});

        this.$scope.$watch(() => this.$state.params.empID, () => {
            let empId = this.$state.params.empID;
            let employees = this.storage.employees;
            this.currEmp = this._.find(employees, emp => emp.id === empId);
        });
    }

    editEmployee(emp) {
        emp === this.currEmp ? this.$state.go('employees') : this.$state.go('employees.employee', {empID: emp.id});
    };

    addEmp() {
        this.$state.go('employees.add');
    }
}
EmployeesController.$inject = ['$state', 'storage', '_', '$scope'];
module.exports = EmployeesController;