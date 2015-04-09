(function(){
  'use strict';
  angular.module('App',['ngRoute','itemscrtl','ngMaterial'])
    .config(conpileConfig)
    .config(config);
    
    conpileConfig.$inject = ['$compileProvider'];

    function conpileConfig($compileProvider) {
      $compileProvider
      .aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    };

    config.$inject = ['$routeProvider', '$compileProvider'];

    function config($routeProvider ) {
     
      $routeProvider
      .when('/itens', {
        templateUrl: '../templates/list.tpl.html',
        controller: 'ListCtrl',
        controllerAs: 'vm'
      })
      .when('/item/:id', {
        templateUrl: '../templates/item.tpl.html',
        controller: 'ItemCtrl',
        controllerAs: 'vm'
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
    };
})();