const config = {
    name: 'about',
    url: '/about',
    templateUrl: 'src/pages/about/about.tmpl.html',
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
    resolve: {
        loadModule: ($q, $ocLazyLoad) => {
            const deferred = $q.defer();
            require.ensure([], function() {
                $ocLazyLoad.load(require('./'));
                deferred.resolve();
            });

            return deferred.promise;
        }
    }
};

module.exports = config;