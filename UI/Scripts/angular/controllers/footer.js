angular
    .module('demo')
    .component('footerBar', {
        templateUrl: '/scripts/angular/templates/footer.html',
        controller: function ($scope) {
            $scope.year = new Date().getFullYear();
            $scope.name = 'Angular 1.5 Seed';
        }
    });