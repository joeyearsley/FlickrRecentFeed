  'use strict';

  /**
   * @ngdoc function
   * @name potatoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the potatoApp
   */

   angular.module('potatoApp')
   .controller('MainCtrl', function ($rootScope, $scope, $http, timeDifferenceService, $window, $filter) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];
    
    $http({
      method: 'JSONP',
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json',
      params: {
        'jsoncallback': 'JSON_CALLBACK'
      } 
    }).success(function(dat) {
      angular.forEach(dat.items, function(value, key) {
        value.id = key;
      });
      $rootScope.dataSet = dat.items;
      $scope.dataSet = $filter('limitTo')(dat.items, 5);
    });
    
    $scope.win = $window.outerWidth;
    angular.element($window).bind('resize',function(){
      $scope.win = $window.outerWidth;
      $scope.$apply();
    });

    var last = 5;
    $scope.loadMore = function() {
      if($rootScope.dataSet !== undefined){
        if(last !== $rootScope.dataSet.length){
          for(var i = last; i <= (last+4); i++) {
            $scope.dataSet.push($rootScope.dataSet[i]);
          }
         last+=5;
       }
     }
    };

    $scope.timeDifference = timeDifferenceService;
    
    
  });


