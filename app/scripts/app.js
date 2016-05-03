'use strict';

/**
 * @ngdoc overview
 * @name pawanApp
 * @description
 * # pawanApp
 *
 * Main module of the application.
 */
angular
  .module('pawanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/track', {
        templateUrl: 'views/track.html',
        controller: 'trackCTRL'
      })
      .when('/genere', {
        templateUrl: 'views/genere.html',
        controller: 'genereCTRL'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
