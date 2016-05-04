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
    'ngTouch',
    'simplePagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    
      .when('/track', {
        templateUrl: 'views/track.html',
        controller: 'trackCTRL'
      })
      .when('/genere', {
        templateUrl: 'views/genere.html',
        controller: 'genereCTRL'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'trackCTRL'
      })

      .when('/addSong', {
        templateUrl: 'views/addSong.html',
        controller: 'trackCTRL'
      })

      .when('/singletrack', {
        templateUrl: 'views/singletrack.html',
        controller: 'trackCTRL'
      })
      .otherwise({
        redirectTo: '/track'
      });
  });
