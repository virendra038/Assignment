'use strict';

angular.module('pawanApp')
  .controller('genereCTRL', function ($scope,service,Pagination,$location) {

  		service.getgenere()
  			.then(function(response){
            $scope.data = response;
            $scope.data = response;
            $scope.l = $scope.data.length;
           // console.log($scope.l);
            $scope.currentPage=0;
           	$scope.pagination = Pagination.getNew();
  			},function(error){
  				alert("some error occured");
  			})

  			 $scope.sg = function(id){
        	//console.log(id);
        	service.sgen(id)
        		.then(function(response){
        			$scope.sgen = response;
        			$scope.ko = 1;
            //console.log(response);
            
        },function(error){
          alert("some error occured");
        });
        };

         $scope.createg = function(){
        	 $scope.name = {
        	 	"name":$scope.newgen,
        	 };
        	service.cg($scope.name)
        		.then(function(response){
            //console.log(response);
             alert("Successfully created please refresh");
            
        },function(error){
          alert("some error occured");
        });
            
        };

        $scope.editg = function(id){
        	 $scope.name = {
        	 	"name":$scope.newname,
        	 };
        	service.eg(id,$scope.name)
        		.then(function(response){
            //console.log(response);
            alert("Successfully edited please refresh");
                  $scope.sg(response.id);
            $location.path("/genere");
            
        },function(error){
          alert("some error occured");
        });
            
        };


  });