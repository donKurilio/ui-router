module.exports = {
    name: 'employees',
    url: '/employees',
    templateUrl: 'src/pages/employees-list/employees-list.tpl.html',
    controller: 'EmployeesController',
    controllerAs: 'emps',
    resolve: {
        'loadModule': ($q, $ocLazyLoad) => {
            "ngInject";
            const deferred = $q.defer();
            require.ensure([], function() {
                $ocLazyLoad.load(require('./'));
                deferred.resolve();
            });

            return deferred.promise;
        },
        'employees': ($resource, storage, loadModule) => {
            "ngInject";
            return $resource('employees.json').get().$promise.then(data => {
                storage.employees = data.employees;
            });
        }
    }
};