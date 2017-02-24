class AddEmployeeController {
    constructor($state, storage, _) {
        angular.extend(this, {$state, storage, _});
    }

    saveEmp() {
        this.currEmp.id = this.storage.employees.length ? this._.max(this._.pluck(this.storage.employees, "id")) + 1 : 1;
        this.storage.employees.push(this.currEmp);
        this.$state.go("^");
    };

    cancelEmp() {
        this.$state.go("^");
    }
}
module.exports = AddEmployeeController;