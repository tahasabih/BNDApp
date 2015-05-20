(function () {
	'use strict';


	angular.module('BND').controller('myBooksCtrl', ['$scope', '$http', '$ionicModal', 'HttpGetApi', myBooksCtrl])

	function myBooksCtrl($scope, $http, $ionicModal, HttpGetApi) {
	  	HttpGetApi.getBooksList().then(function (data) {
	  		$scope.books = data.items;
	  	});
	  	
	};

})();