(function () {
	'use strict';

	angular.module('BND').factory('HttpGetApi', ['$http', HttpGetApi]);

	function HttpGetApi($http) {
		var myBooks = []
		function getBooksList(callback) {
	    	$http({method : 'GET',url : 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"J. K. Rowling"&maxResults=4'})
	        .success(function(data, status) {
	            callback(data);
	        })
	        .error(function(data, status) {
	            alert("Error");
	        });
	    }

	    return {
	    	getBooksList : getBooksList
	    };

	};
})();