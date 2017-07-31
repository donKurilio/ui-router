class EmployeesController {
    constructor($state, storage, _, $scope) {
        "ngInject";
        console.log('list');
        angular.extend(this, {$state, storage, _, $scope, pageTitle: "Сотрудники"});

        this.$scope.$watch(() => this.$state.params.empID, () => {
            let empId = this.$state.params.empID;
            let employees = this.storage.employees;
            this.currEmp = this._.find(employees, emp => emp.id === empId);
        });
    }

    editEmployee(emp) {
        console.log('go edit');
        emp === this.currEmp ? this.$state.go('employees') : this.$state.go('employees.employee', {empID: emp.id});
    };

    addEmp() {
        this.$state.go('employees.add');
    }
}
module.exports = EmployeesController;