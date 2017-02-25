module.exports = {
    name: 'employees.add',
    url: 'employees-list/add-employee',
    templateUrl: 'src/pages/employees-list/add-employee/add-employee.tmpl.html',
    controller: 'AddEmployeeController',
    controllerAs: 'addEmp',
    resolve: {
        loadModule: ($q, $ocLazyLoad) => {
            "ngInject";
            const deferred = $q.defer();
            require.ensure([], function() {
                $ocLazyLoad.load(require('./'));
                deferred.resolve();
            });
            return deferred.promise;
        }
    }
};