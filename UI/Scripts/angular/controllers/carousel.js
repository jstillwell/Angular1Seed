angular
    .module('demo')
    .component('carousel', {
        templateUrl: '/js/angular/templates/carousel.html',
        controller: function ($scope) {
            $scope.year = new Date().getFullYear();
        }
    });