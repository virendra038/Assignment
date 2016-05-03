'use strict'
angular.module('pawanApp')
    .service('service',function ($http,$q) {

	var URL =  'http://104.197.128.152:8000';
	var service = this;
	service.taskList = {};

	service.gettrack = function(){
         
		var defer = $q.defer();
    $http({
     method  : 'GET',
     url     : URL+'/v1/tracks',
     headers: {
        "Accept": "application/json, text/plain, */*",

    }
    })
    .success(function(response){
        defer.resolve(response);
    })
    .error(function(error,status){
      defer.reject(error);
    })

   return defer.promise
	}
    

   //  service.searchtrack = function(x){
         
   //  var deferr = $q.defer();
   //  $http({
   //   method  : 'GET',
   //   url     : URL+'/v1/tracks',
   //   parrams : {title : x}
   //   headers: {
   //      "Accept": "application/json, text/plain, */*",

   //  }
   //  })
   //  .success(function(response){
   //      deferr.resolve(response);
   //  })
   //  .error(function(error,status){
   //    deferr.reject(error);
   //  })

   // return deferr.promise
   //  }


    service.getgenere = function(){
         
        var deferg = $q.defer();
    $http({
     method  : 'GET',
     url     : URL+'/v1/genres',
     headers: {
        "Accept": "application/json, text/plain, */*",

    }
    })
    .success(function(response){
        deferg.resolve(response);
    })
    .error(function(error,status){
      deferg.reject(error);
    })

   return deferg.promise
    }
   
});