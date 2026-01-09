app.controller('MesEnfantsCtrl', ['$scope', 'ChildService', function ($scope, ChildService) {
    $scope.loading = true;
    $scope.children = [];

    var loadChildren = function () {
        ChildService.getChildren().then(function (data) {
            $scope.children = data;
            $scope.loading = false;
        }, function (error) {
            console.error(error);
            $scope.loading = false;
        });
    };

    // Calculate age helper
    $scope.getAge = function (birthDate) {
        if (!birthDate) return '';
        var today = new Date();
        var birthDate = new Date(birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    $scope.deleteChild = function (id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet enfant ?')) {
            ChildService.deleteChild(id).then(function () {
                loadChildren(); // Reload list
            });
        }
    };

    loadChildren();
}]);
