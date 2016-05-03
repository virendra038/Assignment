'use strict';

/**
 * @ngdoc function
 * @name pawanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pawanApp
 */
angular.module('pawanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
