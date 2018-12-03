'use strict';

/**
 * @ngdoc overview
 * @name decidrApp
 * @description
 * # decidrApp
 *
 * Main module of the application.
 */
angular
  .module('decidrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngMaterial',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('teal')
    .warnPalette('red')
    .backgroundPalette('grey');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
