(function () {
	'use strict';

	angular.module('BND').controller('myBooksCtrl', ['$scope', '$http', '$ionicModal', myBooksCtrl])

	function myBooksCtrl($scope, $http, $ionicModal) {
	  	$scope.books = [];
	   	$http({method : 'GET',url : 'https://www.googleapis.com/books/v1/volumes?q=inauthor:"J. K. Rowling"&maxResults=4'})
	        .success(function(data, status) {
	            $scope.books = data.items;
	            console.log($scope.books);
	        })
	        .error(function(data, status) {
	            alert("Error");
	        });
	    
	};

})();