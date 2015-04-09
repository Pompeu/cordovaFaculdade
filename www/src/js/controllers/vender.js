(function(){
  'use strict';

  angular.module('App')
  .controller('VendasCtrl',VendasCtrl);

  VendasCtrl.$inject = ['$location'];
  
  function VendasCtrl($location) {
    var vm = this;
    vm.marcado = false;
    vm.filme = null;
    vm.clients = [];
    vm.filmes = [];
    vm.filmesAlugados = [];
    vm.total = 0;

    vm.buscarCliene = function(cpf) {     
      vm.clients = vm.listCli.filter(function(v) {
        return v.cpf == cpf;
      })
    };

    vm.buscarFilme = function(codigo) {
      vm.filmes = vm.listFilmes.filter(function(v) {
        return v.codigo == codigo;
      })
    };

    vm.addFilme = function() {
      var filme = vm.filmes[0];      
      vm.filmesAlugados.push(filme);
      vm.total += parseFloat(vm.filmes[0].valor);

    };

    vm.fecharAluguel = function() {
      vm.saida = {
        filmes : vm.filmesAlugados,
        total : vm.total,
        client : vm.clients[0]
      }
      console.log(vm.saida)
    };

    vm.listCli =  [
      { 
        name : 'Itacir',
        cpf : '1'
      },
       { 
        name : 'Maria',
        cpf : '2'
      },
       { 
        name : 'Rubica',
        cpf : '3'
      }
    ];

    vm.listFilmes =[
      { 
        name : 'Piratas Cabibe',
        codigo : 1,
        valor : '8.23'
      },
      { 
        name : 'Lord Of Rings',
        codigo : 2,
        valor : '7.32'
      },
      { 
        name : 'Trança vovo Careca',
        codigo : 3,
        valor : '10.01'
      }
    ];
  };    
}()); 
  