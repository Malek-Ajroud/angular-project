app.service('AccountService', ['$q', '$timeout', function ($q, $timeout) {
    var user = {
        fullName: 'Marie Dupont',
        email: 'marie.dupont@example.com',
        phone: '06 12 34 56 78',
        notifications: {
            email: true,
            sms: false
        }
    };

    return {
        getAccount: function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(angular.copy(user));
            }, 400);
            return deferred.promise;
        },

        updateAccount: function (updatedUser) {
            var deferred = $q.defer();
            $timeout(function () {
                user = updatedUser;
                deferred.resolve(user);
            }, 800);
            return deferred.promise;
        },

        deleteAccount: function () {
            var deferred = $q.defer();
            $timeout(function () {
                // Simulate deletion
                user = null;
                deferred.resolve();
            }, 1000);
            return deferred.promise;
        }
    };
}]);
