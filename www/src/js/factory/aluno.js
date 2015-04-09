(function(){
  'use strict';
  angular.module('App')
  .factory('Alunofactory',Alunofactory);
    
  Alunofactory.$inject = ['$http'];

  function Alunofactory ($http) { 
    var url = 'https://bloog-limp.herokuapp.com/api/alunos/';

    var service = {
      getAlunos : getAlunos,
      getById : getById,
      create : create,
      deleteById : deleteById,
      update : update
    }

    return service;

    function getAlunos() {
        return $http.get(url)
        .then(function(data) {
          return data.data;
        },function(err) {
          return err;
        });        
    }

    function getById(id) {
      return $http.get(url+id)
        .then(function(data) {
          return data.data;
        },function(err) {
          return err;
        }); 
    }

    function create (aluno) {
      return $http.post(url, aluno)
      .then(function(data) {
        return data.data;          
      },function(err) {
        return err
      });       
     
    }

    function deleteById(id) {
      return $http.delete(url+id)
      .then(function(data) {
       return data.status;          
      },function(err) {
        return err;
      })        
    }

    function update(aluno) {
      return $http.put(url+aluno._id,aluno)
      .then(function(data) {
        return data.data;
      },function(err) {
        return err;
      })        
    }     
  }   
})();
