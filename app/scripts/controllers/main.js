'use strict';

angular.module('stoogeBloggerzApp')
  .controller('MainCtrl', function ($scope, Authorservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.authors = Authorservice.getAuthors();
    console.log($scope.authors);
  });
