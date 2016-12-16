
var app = angular.module('myApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'cmelo.angularSticky']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'mainCtrl'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'portfolio.html',
            controller: 'mainCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: 'mainCtrl'
        })
});

//function showMore(showMoreId, containerId) {
//    var container = document.getElementById(containerId);
//    var showMoreLink = document.getElementById(showMoreId);
//
//    container.style.display = 'block';
//    showMoreLink.style.display = 'none';
//}