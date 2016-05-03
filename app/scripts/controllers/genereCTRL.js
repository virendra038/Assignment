'use strict';

angular.module('pawanApp')
  .controller('genereCTRL', function ($scope,service) {

  		service.getgenere()
  			.then(function(response){
            $scope.data = response;
            console.log($scope.data);
  			},function(error){
  				alert("some error occured");
  			})


  });