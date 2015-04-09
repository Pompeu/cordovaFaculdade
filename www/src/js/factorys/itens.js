(function(){
  'use strict';

   angular.module('app')
      .factory('FactoryItens',FactoryItens)

      FactoryItens.$inject = ['$http'];

      function FactoryItens($http) {

        var url = 'resources/resources.json';

        var service = {
          getItens : getItens
        }

        return service;
        
        function getItens () {
          return $http.get(url)
            .then(function(data) {
              return data.data;
            },function(err) {
              return err;
            });
        };
      };
})();