module.exports = {
    name: 'employees.employee',
    url: '/{empID:int}',
    templateUrl: 'src/pages/employees-list/edit-employee/edit-employee.tmpl.html',
    controller: 'EditEmployeeController',
    controllerAs: 'emp',
    resolve: {
        loadModule: ($q, $ocLazyLoad) => {
            "ngInject";
            const deferred = $q.defer();
            require.ensure([], function () {
                $ocLazyLoad.load(require('./'));
                deferred.resolve();
            });

            return deferred.promise;
        }
    }
};