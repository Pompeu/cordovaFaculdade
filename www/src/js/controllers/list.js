(function(){
  'use strict';
  angular.module('itemscrtl',[])
    .controller('ListCtrl',ListCtrl)
    .controller('ItemCtrl',ItemCtrl)

    ListCtrl.$inject = ['$http'];
    
    function ListCtrl($http) {
      var vm = this;
      vm.itens = [] 
      $http.get('resources/resources.json')
      .then(function(data) {
        vm.itens = data.data;
      },function(err) {
        alert(err);
      });      
    };
    
    ItemCtrl.$inject = ['$routeParams','$http']
    
    function ItemCtrl($routeParams,$http) {
        var vm = this;
        vm.itens = [];

        $http.get('resources/resources.json')
        .then(function(data) {
          vm.itens = data.data;
          vm.item = vm.itens[$routeParams.id-1]; 
        },function(err) {
          alert(err);
        });            
    };

})();

