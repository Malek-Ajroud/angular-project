app.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    // Determine active route for sidebar highlighting
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    // Mobile menu toggle
    $scope.mobileMenuOpen = false;
    $scope.toggleMobileMenu = function () {
        $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
    };
}]);
