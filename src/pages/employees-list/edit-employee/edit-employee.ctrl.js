class EditEmployeeController {
    constructor($state, storage, _) {
        "ngInject";
        console.log('edit');
        angular.extend(this, {$state, storage, _});
        this.emp = this._.find(this.storage.employees, obj => obj.id === this.$state.params.empID);
        if (this.emp) {
            this.currEmp = angular.copy(this.emp);
        }
        else {
            this.$state.go('^');
        }
    }

    saveEmp() {
        angular.extend(this.emp, this.currEmp);
        this.$state.go('employees');
    };

    delEmp() {
        this.storage.employees = this._.filter(this.storage.employees, emp => emp.id !== this.currEmp.id);
        this.$state.go('^');
    };
}
module.exports = EditEmployeeController;