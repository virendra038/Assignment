'use strict';

angular.module('pawanApp')
  .controller('trackCTRL', function ($scope,service,Pagination, $location,$rootScope) {

      service.gettrack()
        .then(function(response){
            $scope.data = response;
            $scope.l = $scope.data.length;
            console.log($scope.l);
            $scope.currentPage=0;
           	$scope.pagination = Pagination.getNew();

        },function(error){
          alert("some error occured");
        })

        $scope.search = function(){
        	$scope.song = $scope.se;
        	service.searchtrack($scope.song)
        	.then(function(response){
        		$rootScope.songs = response;
        		$location.path("/search");
            console.log(response);
            
        },function(error){
          alert("some error occured");
        })
        };

        $scope.addsong = function() {
        	$location.path("/addSong");
        }
        $scope.addTrack = function(m){
        	$scope.x = {
        		"title": m.title,
        		"rating":m.rating,
        		"genres":[m.genres]
        	};
        	service.addNewTrack($scope.x)
        		.then(function(response){
        			console.log(response);
        },function(error){
          window.alert("some error occured");
        })

        };

        $scope.st = function(id){
        	console.log(id);
        	service.strack(id)
        		.then(function(response){
        		$rootScope.so = response;
        		$location.path("/singletrack");
            console.log(response);
            
        },function(error){
          alert("some error occured");
        })
        };

        $scope.editt = function(u){
        	console.log(u);
        	 $scope.th ={
        		"title":$scope.x.newtitle,
        		"rating":$scope.x.newrating,
        		"genres":[$scope.x.newgenre]
        	};
        	service.edittrack(u,$scope.th)
        		.then(function(response){
      			 console.log(response);
           
            
        },function(error){
          alert("some error occured");
        })
        };

        
  });