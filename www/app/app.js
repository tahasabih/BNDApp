// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('BND', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.mybooks', {
      abstract: true,
      url: "/mybooks",
      views: {
        "tab-mybooks": {
          templateUrl: "app/home/mybooks.html"
        }
      }
    })

    .state('home.mybooks.myown', {
      url: "/myown",
      views: {
        "tab-mybooks-myown": {
          templateUrl: "app/home/myown.html"
        }
      }
    })

    .state('home.mybooks.borrowedlent', {
      url: "/borrowedlent",
      views: {
        "tab-mybooks-borrowedlent": {
          templateUrl: "app/home/borrowedlent.html"
        }
      }
    })

    .state('home.aroundme', {
      url: "/aroundme",
      views: {
        "tab-aroundme": {
          templateUrl: "app/home/aroundme.html"
        }
      }
    })

    .state('home.search', {
      url: "/search",
      views: {
        "tab-search": {
          templateUrl: "app/home/search.html"
        }
      }
    })

    .state('home.myaccount', {
      url: "/myaccount",
      views: {
        "tab-myaccount": { 
          templateUrl: "app/home/myaccount.html"
        }
      }
    })

  $urlRouterProvider.when('/home/mybooks', '/home/mybooks/myown');
  $urlRouterProvider.otherwise('/home/search');
});