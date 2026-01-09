app.service('EventService', ['$q', '$timeout', function ($q, $timeout) {
    var events = [
        {
            id: '1',
            title: 'Rendez-vous pédiatre',
            date: new Date('2024-06-15'), // Future date example
            description: 'Visite de contrôle pour Léo'
        },
        {
            id: '2',
            title: 'Kermesse de l\'école',
            date: new Date('2024-06-25'),
            description: 'Apporter un gâteau'
        }
    ];

    return {
        getEvents: function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(angular.copy(events));
            }, 400);
            return deferred.promise;
        },

        addEvent: function (event) {
            var deferred = $q.defer();
            $timeout(function () {
                event.id = Date.now().toString();
                if (typeof event.date === 'string') {
                    event.date = new Date(event.date);
                }
                events.push(event);
                deferred.resolve(event);
            }, 500);
            return deferred.promise;
        },

        deleteEvent: function (id) {
            var deferred = $q.defer();
            $timeout(function () {
                var index = events.findIndex(e => e.id === id);
                if (index !== -1) {
                    events.splice(index, 1);
                    deferred.resolve();
                } else {
                    deferred.reject('Événement non trouvé');
                }
            }, 300);
            return deferred.promise;
        }
    };
}]);
