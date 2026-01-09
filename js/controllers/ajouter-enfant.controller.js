app.controller('AjouterEnfantCtrl', ['$scope', '$location', '$routeParams', 'ChildService', function ($scope, $location, $routeParams, ChildService) {
    $scope.child = {
        gender: 'boy' // default
    };
    $scope.isSubmitting = false;
    $scope.successMessage = '';
    $scope.isEditMode = false;

    // Check if in edit mode
    if ($routeParams.id) {
        $scope.isEditMode = true;
        ChildService.getChild($routeParams.id).then(function (child) {
            $scope.child = child;
            // Ensure date object for input[type=date]
            if (typeof $scope.child.birthDate === 'string') {
                $scope.child.birthDate = new Date($scope.child.birthDate);
            }
        }, function (error) {
            console.error("Erreur chargement enfant:", error);
            $location.path('/mes-enfants');
        });
    }

    // Date validation helper
    $scope.validateDate = function () {
        if (!$scope.child.birthDate) return;
        var date = new Date($scope.child.birthDate);
        var now = new Date();
        if (date > now) {
            $scope.childForm.birthDate.$setValidity('futureDate', false);
        } else {
            $scope.childForm.birthDate.$setValidity('futureDate', true);
        }
    };

    $scope.submitForm = function () {
        if ($scope.childForm.$valid) {
            $scope.isSubmitting = true;

            var promise;
            if ($scope.isEditMode) {
                promise = ChildService.updateChild($scope.child);
            } else {
                promise = ChildService.addChild($scope.child);
            }

            promise.then(function () {
                $scope.successMessage = $scope.isEditMode ? "Modifications enregistrées !" : "Enfant ajouté avec succès !";
                $scope.isSubmitting = false;

                // Redirect after brief delay
                setTimeout(function () {
                    $scope.$apply(function () {
                        $location.path('/mes-enfants');
                    });
                }, 1500);
            }, function (error) {
                console.error("Erreur:", error);
                $scope.isSubmitting = false;
            });
        }
    };
}]);
