(function(){
  'use strict';
  angular.module('App',['ngRoute','itemscrtl'])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider
      .when('/itens', {
        templateUrl: '../templates/list.tpl.html',
        controller: 'ListCtrl'
      })
      .when('/item/:id', {
        templateUrl: '../templates/item.tpl.html',
        controller: 'ItemCtrl'
      })
      .otherwise({ redirectTo: '/' });
    }]);
})();