app.service('ChildService', ['$q', '$timeout', function ($q, $timeout) {
    var children = [
        {
            id: '1',
            firstName: 'Léo',
            birthDate: new Date('2018-05-15'),
            gender: 'boy'
        },
        {
            id: '2',
            firstName: 'Emma',
            birthDate: new Date('2020-08-22'),
            gender: 'girl'
        }
    ];

    return {
        getChildren: function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(angular.copy(children));
            }, 500); // Simulate network delay
            return deferred.promise;
        },

        getChild: function (id) {
            var deferred = $q.defer();
            $timeout(function () {
                var child = children.find(c => c.id === id);
                if (child) {
                    deferred.resolve(angular.copy(child));
                } else {
                    deferred.reject('Enfant non trouvé');
                }
            }, 300);
            return deferred.promise;
        },

        addChild: function (child) {
            var deferred = $q.defer();
            $timeout(function () {
                child.id = Date.now().toString();
                if (typeof child.birthDate === 'string') {
                    child.birthDate = new Date(child.birthDate);
                }
                children.push(child);
                deferred.resolve(child);
            }, 600);
            return deferred.promise;
        },

        updateChild: function (child) {
            var deferred = $q.defer();
            $timeout(function () {
                var index = children.findIndex(c => c.id === child.id);
                if (index !== -1) {
                    if (typeof child.birthDate === 'string') {
                        child.birthDate = new Date(child.birthDate);
                    }
                    children[index] = child;
                    deferred.resolve(child);
                } else {
                    deferred.reject('Enfant non trouvé');
                }
            }, 600);
            return deferred.promise;
        },

        deleteChild: function (id) {
            var deferred = $q.defer();
            $timeout(function () {
                var index = children.findIndex(c => c.id === id);
                if (index !== -1) {
                    children.splice(index, 1);
                    deferred.resolve();
                } else {
                    deferred.reject('Enfant non trouvé');
                }
            }, 400);
            return deferred.promise;
        }
    };
}]);
