'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the potatoApp
 */
 angular.module('potatoApp')
 .controller('AboutCtrl', function ($scope, $routeParams,$rootScope,timeDifferenceService,$location) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  if($rootScope.dataSet === undefined){
    $location.path('/');
  }
  $scope.id = $routeParams.id;
  $scope.data = $rootScope.dataSet[$scope.id];
  $scope.timeDifference = timeDifferenceService;

});
