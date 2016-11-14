angular.module('demo').config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/home', {
          templateUrl: '/scripts/angular/templates/home.html',
          controller: 'home'
      }).
      when('/contact', {
          templateUrl: '/scripts/angular/templates/contact.html',
          controller: 'contact'
      }).
      when('/about', {
          templateUrl: '/scripts/angular/templates/about.html',
          controller: 'about'
      }).
      when('/locations', {
          templateUrl: '/scripts/angular/templates/locations.html',
          controller: 'locations'
      }).
      otherwise('/home');
}]);