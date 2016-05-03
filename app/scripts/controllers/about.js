'use strict';

/**
 * @ngdoc function
 * @name pawanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pawanApp
 */
angular.module('pawanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
