var app = angular.module('monEspaceParent', ['ngRoute', 'ngAnimate', 'ngResource']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/accueil', {
            templateUrl: 'views/accueil.html',
            controller: 'AccueilCtrl'
        })
        .when('/ajouter-enfant', {
            templateUrl: 'views/ajouter-enfant.html',
            controller: 'AjouterEnfantCtrl'
        })
        .when('/modifier-enfant/:id', {
            templateUrl: 'views/ajouter-enfant.html',
            controller: 'AjouterEnfantCtrl'
        })
        .when('/gerer-compte', {
            templateUrl: 'views/gerer-compte.html',
            controller: 'GererCompteCtrl'
        })
        .when('/mes-enfants', {
            templateUrl: 'views/mes-enfants.html',
            controller: 'MesEnfantsCtrl'
        })
        .when('/calendrier', {
            templateUrl: 'views/calendrier.html',
            controller: 'CalendrierCtrl'
        })
        .when('/conseils', {
            templateUrl: 'views/conseils.html',
            controller: 'ConseilsCtrl'
        })
        .when('/chat', {
            templateUrl: 'views/chat.html',
            controller: 'ChatCtrl'
        })
        .otherwise({
            redirectTo: '/accueil'
        });
}]);

