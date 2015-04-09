(function(){
  'use strict';
    angular.module('app')
    .controller('MainCtrl',MainCtrl)

    MainCtrl.$inject = ['FactoryItens'];

    function MainCtrl(FactoryItens) {
      console.log(FactoryItens.getItens());
      var vm = this;
      vm.itens = [];
      vm.item = {};
    
      FactoryItens
        .getItens()
        .then(function(data) {
           vm.itens = data;
        });        
      
   
      vm.showMenu = function(flag) {
        vm.flagMenu = flag ? flag : false;
      };

      vm.showItem = function(id) {          
          vm.item = vm.itens[id-1];
          vm.showMenu(false);
          vm.showDados(true);
      };

      vm.showDados = function(flag) {
        vm.flagDados = flag ? flag : false;
      };

      vm.back = function() {
        vm.showMenu(true);
        vm.showDados(false);
      };
    };

})();