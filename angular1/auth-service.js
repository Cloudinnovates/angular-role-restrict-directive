(function() {
  'use strict';

  angular.module('app').factory('authService', authService);

  function authService() {
      var user = {
          role: 'content_manager'
      }

      return {
          user: user
      }
  }
})();