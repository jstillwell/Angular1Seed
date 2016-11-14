angular.
  module('demo').
  component('topNav', {
      templateUrl: '/js/angular/templates/top-nav.html',
      controller: function GreetUserController() {
          this.user = 'world';
      }
  });