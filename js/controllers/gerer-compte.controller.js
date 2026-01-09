app.controller('GererCompteCtrl', ['$scope', '$location', 'AccountService', function ($scope, $location, AccountService) {
    $scope.user = {};
    $scope.loading = true;
    $scope.saving = false;
    $scope.deleting = false;
    $scope.message = {
        text: '',
        type: '' // 'success' or 'error'
    };

    AccountService.getAccount().then(function (data) {
        $scope.user = data;
        $scope.loading = false;
    });

    $scope.updateAccount = function () {
        if ($scope.accountForm.$valid) {
            $scope.saving = true;
            $scope.message.text = '';

            AccountService.updateAccount($scope.user).then(function () {
                $scope.saving = false;
                $scope.message.text = 'Modifications enregistrées avec succès.';
                $scope.message.type = 'success';
            }, function (error) {
                $scope.saving = false;
                $scope.message.text = 'Erreur lors de la sauvegarde.';
                $scope.message.type = 'error';
            });
        }
    };

    $scope.deleteAccount = function () {
        if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
            $scope.deleting = true;
            AccountService.deleteAccount().then(function () {
                alert('Votre compte a été supprimé.');
                $location.path('/'); // Redirect to home/login
            });
        }
    };
}]);
