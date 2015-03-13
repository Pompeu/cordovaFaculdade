(function(){
  'use strict';
  angular.module('itemscrtl',[])
    .controller('ListCtrl',
      ['$scope','$http', function ($scope, $http) {
      $scope.itens = [] 
      $http.get('resources/resources.json')
      .success(function(data) {
        $scope.itens = data;
      })
      .error(function(err) {
      })
    }])
    .controller('ItemCtrl',
      ['$scope','$routeParams','$http',
      function ($scope,$routeParams,$http) {
        $scope.itens = [];

        $http.get('resources/resources.json')
        .success(function(data) {
          $scope.itens = data;
          $scope.item = $scope.itens[$routeParams.id-1]; 
        })
        .error(function(err) {

        })     
    }]);
})();

