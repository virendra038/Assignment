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
    

    service.searchtrack = function(x){
         
    var deferr = $q.defer();
     
    $http({
     method  : 'GET',
     url     : URL+'/v1/tracks',
     params : {title : x}
    
    })
    .success(function(response){
        deferr.resolve(response);
    })
    .error(function(error,status){
      deferr.reject(error);
    })

   return deferr.promise;
    }


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

   return deferg.promise;
    }

    service.addNewTrack = function(x){
      console.log(x);
    var defercv = $q.defer();
    $http({
     method  : 'POST',
     url     : URL+'/v1/tracks',
     data : x,
     headers : { 'Content-Type': 'application/json'} 
     
         })
    .success(function(response){
      defercv.resolve(response);
    })
    .error(function(error,status){
      defercv.reject(error);
    })

    return defercv.promise
  };
  service.strack = function(x){
      console.log(x);
     var def = $q.defer();
     
    $http({
     method  : 'GET',
     url     : URL+'/v1/tracks/'+x,
    
    })
    .success(function(response){
        def.resolve(response);
    })
    .error(function(error,status){
      def.reject(error);
    })

   return def.promise;
 };

  service.edittrack = function(f,o){
      console.log(o);
     var edit = $q.defer();
     
    $http({
     method  : 'POST',
     url     : URL+'/v1/tracks/' +f ,
     data : o,
     headers : { 'Content-Type': 'application/json'} 
    
    })
    .success(function(response){
        edit.resolve(response);
    })
    .error(function(error,status){
      edit.reject(error);
    })

   return edit.promise;
 };

 service.sgen = function(x){
      console.log(x);
     var gg = $q.defer();
     
    $http({
     method  : 'GET',
     url     : URL+'/v1/genres/'+x,
    
    })
    .success(function(response){
        gg.resolve(response);
    })
    .error(function(error,status){
      gg.reject(error);
    })

   return gg.promise;
 };
   
service.cg = function(x){
      console.log(x);
    var crg = $q.defer();
    $http({
     method  : 'POST',
     url     : URL+'/v1/genres',
     data : x,
     headers : { 'Content-Type': 'application/json'} 
     
         })
    .success(function(response){
      crg.resolve(response);
    })
    .error(function(error,status){
      crg.reject(error);
    })

    return crg.promise
  };


  service.eg = function(y,x){
      console.log(y);
      console.log(x);
    var erg = $q.defer();
    $http({
     method  : 'POST',
     url     : URL+'/v1/genres/' +y ,
     data : x,
     headers : { 'Content-Type': 'application/json'} 
     
         })
    .success(function(response){
      erg.resolve(response);
    })
    .error(function(error,status){
      erg.reject(error);
    })

    return erg.promise
  };



});