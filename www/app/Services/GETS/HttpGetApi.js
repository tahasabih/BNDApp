(function () {
	'use strict';

	angular.module('BND').factory('HttpGetApi', ['$http', "$q", "$ionicLoading", HttpGetApi]);

	function HttpGetApi($http, $q, $ionicLoading) {
		var myBooks = []
		$ionicLoading.show({ template: "Fetching..."})
		function getBooksList() {
			var deferred = $q.defer();
	    	$http({method : 'GET',url : 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"J. K. Rowling"&maxResults=20'})
	        .success(function(data, status) {
	            deferred.resolve(data)
	            $ionicLoading.hide();
	        })
	        .error(function(data, status) {
	            alert("Error");
	            deferred.reject();
	        });
	        return deferred.promise;
	    }

	    return {
	    	getBooksList : getBooksList
	    };

	};
})();