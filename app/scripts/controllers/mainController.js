'use strict';

angular.module('angular-seed')
.controller('MainController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
      $scope.helloWorld = 'Hello World';
    };

    $scope.init();

    this.compute = function () {

    };
  },
]);
