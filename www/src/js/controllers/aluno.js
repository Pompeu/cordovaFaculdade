(function(){
  'use strict';
  angular.module('App')
  .factory('Alunofactory',['$http','$q',
    function ($http, $q) { 
    var url = 'https://bloog-limp.herokuapp.com/api/alunos/';
    var deferred = $q.defer();
    return {
      getAlunos : function() {
        $http.get(url)
        .success(function(data) {
          deferred.resolve(data);          
        })
        .error(function(err) {
          deferred.reject(err);
        })        
        return deferred.promise;
      },
      getById : function(id) {
        $http.get(url+id)
        .success(function(data) {
          deferred.resolve(data);          
        })
        .error(function(err) {
          deferred.reject(err);
        })        
        return deferred.promise;
      },
      create : function(aluno) {
        $http.post(url,aluno)
        .success(function(data) {
          deferred.resolve(data);          
        })
        .error(function(err) {
          deferred.reject(err);
        })        
        return deferred.promise;
      },
      deleteById : function(id) {
        $http.delete(url+id)
        .success(function(data) {
          deferred.resolve(data);          
        })
        .error(function(err) {
          deferred.reject(err);
        })        
        return deferred.promise;
      },
      update : function(aluno) {
        $http.put(url+aluno._id,aluno)
        .success(function(data) {
          deferred.resolve(data);          
        })
        .error(function(err) {
          deferred.reject(err);
        })        
        return deferred.promise;
      }       
    }
  }])  
  .controller('AlunoCtrl',['Alunofactory',
  function ( Alunofactory ) {
    var vm = this;
    vm.alunos = null;

    Alunofactory.getAlunos()
    .then(function(result) {
      vm.alunos =  result;
    }, function(reason) {
      console.log('Failed: ' + reason);
    }, function(update) {
      console.log('Got notification: ' + update);
    });
    vm.deletar = function(id) {
      console.log(id);
    };
    
  }])
  .controller('AlunoEditCtrl', ['$routeParams','Alunofactory',
   function ($routeParams, Alunofactory) {
    var vm = this;
    vm.name = "Editar";
 
    vm.aluno = JSON.parse($routeParams.aluno);
    vm.save = function() {
      console.log("update");
      console.log(vm.aluno);
      
      /*Alunofactory.update(vm.aluno)
      .then(function(result) {
        console.log(result);
      }, function(reason) {
        console.log('Failed:'+reason);
      }, function(update) {
        console.log('Got notification: ' +update);
      });*/
    };
  }])
  .controller('AlunoAddCtrl', ['Alunofactory',
   function (Alunofactory) {
    var vm = this;
    vm.name = "Cadastro";
   
    vm.save = function() { 
      console.log("add");
      console.log(vm.aluno);
      
      /*Alunofactory.create(vm.aluno)
      .then(function(result) {
        console.log(result);
      },function(reason) {
        console.log('Failed:'+reason);
      },function(update) {
        console.log('Got notification: ' +update);
      });*/
    };
  }])  
})();