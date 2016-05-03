'use strict';

angular.module('pawanApp')
  .controller('trackCTRL', function ($scope,service) {

      service.gettrack()
        .then(function(response){
            $scope.data = response;
            console.log($scope.data);
        },function(error){
          alert("some error occured");
        })
  });