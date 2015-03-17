(function(){
  'use strict';
  angular.module('App',['ngRoute','itemscrtl','ngMaterial'])
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
      .when('/update/:aluno', {
        templateUrl: '../templates/createaluno.tpl.html',
        controller: 'AlunoEditCtrl',
        controllerAs: 'vm'
      })
      .when('/addaluno', {
        templateUrl: '../templates/createaluno.tpl.html',
        controller: 'AlunoAddCtrl',
        controllerAs: 'vm'
      })
      .when('/listaluno', {
        templateUrl: '../templates/listalunos.tpl.html',
        controller: 'AlunoCtrl',
        controllerAs: 'vm'
      })
      .when('/vendas', {
        templateUrl: '../templates/vendes.tpl.html',
        controller: 'VendasCtrl',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/' });
    }]);
})();