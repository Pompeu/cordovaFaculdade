(function(){
  'use strict';

  angular.module('App')
  .controller('AlunoCtrl', AlunoCtrl)
  .controller('AlunoEditCtrl',AlunoEditCtrl)
  .controller('AlunoAddCtrl',AlunoAddCtrl)

  AlunoCtrl.$inject =  ['Alunofactory','$location'];

  function AlunoCtrl (Alunofactory , $location) {
    var vm = this;
    vm.alunos = [];

    Alunofactory.getAlunos()
    .then(function(data) {      
        vm.alunos = data;
      return vm.alunos;
    });

    vm.deletar = function(index , id) {
      Alunofactory.deleteById(id)
      .then(function(data) {
        vm.alunos.splice(index,1);
       return $location.path('/listaluno');
      });
    };
    
  }
  
  AlunoEditCtrl.$inject = ['$routeParams','Alunofactory','$location'];

  function AlunoEditCtrl($routeParams, Alunofactory, $location) {
    var vm = this;
    vm.name = "Editar";
 
    vm.aluno = JSON.parse($routeParams.aluno);

    vm.save = function() {    
      Alunofactory.update(vm.aluno)
      .then(function(data) {
        return $location.path('/listaluno');
        console.log(data);
      });
    };
  }

  AlunoAddCtrl.$inject =  ['Alunofactory','$location'];

  function AlunoAddCtrl (Alunofactory , $location) {
    var vm = this;
    vm.name = "Cadastro";
   
    vm.save = function() { 
      Alunofactory.create(vm.aluno)
      .then(function(result) {
        return $location.path('/listaluno');
        console.log(result);
      });
    };
  } 
})();