var app = angular.module("your-products",['ui.router'])


app.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

        .state('php', {
            url: '/php-state',
            templateUrl: 'states/php/php.html',
            controller: 'phpController'
        })

        .state('js', {
            url: '/js-state',
            templateUrl: 'states/js/js.html',
            controller: 'jsController'

        })

        .state('css', {
            url: '/css-state',
            templateUrl: 'states/css/css.html',
            controller: 'cssController'

        })

        .state('angular', {
            url: '/angular-state',
            templateUrl: 'states/angular/angular.html',
            controller: 'angularController'

        })
        .state('jquery', {
            url: '/jquery-state',
            templateUrl: 'states/jquery/jquery.html',
            controller: 'jqueryController'

        })

   // $urlRouterProvider.otherwise('/php');


});





