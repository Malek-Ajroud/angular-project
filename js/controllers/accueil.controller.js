angular.module('monEspaceParent').controller('AccueilCtrl', ['$scope', '$q', 'ChildService', 'EventService', function ($scope, $q, ChildService, EventService) {
    $scope.loading = true;
    $scope.stats = {
        childrenCount: 0,
        nextEvent: null
    };

    // Aggregate data for dashboard cards
    var init = function () {
        var p1 = ChildService.getChildren().then(function (children) {
            $scope.stats.childrenCount = children.length;
        });

        var p2 = EventService.getEvents().then(function (events) {
            // Find next upcoming event
            var now = new Date();
            var upcoming = events.filter(function (e) { return new Date(e.date) >= now; });
            upcoming.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });
            $scope.stats.nextEvent = upcoming.length > 0 ? upcoming[0] : null;
        });

        $q.all([p1, p2]).then(function () {
            $scope.loading = false;
        });
    };

    init();
}]);
