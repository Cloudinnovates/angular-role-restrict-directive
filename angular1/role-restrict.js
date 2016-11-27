(function () {
    'use strict';
    angular.module('app').directive('roleRestrict', ['authService', function (authService) {
        return {
            restrict: 'A',
            priortiy: 100000,
            scope: false,
            link: function (scope, element, attr) {
                var allowAccess = false;
                var user = authService.user;

                // you can set your default authorized roles in the if statement below
                // if(user.role.toLowerCase().trim() === 'admin') 
                //     return;

                var roles = attr.allow.split(' ');

                roles.forEach(function (role) {
                    if (user.role.toLowerCase().trim() === role.toLowerCase().trim())
                        allowAccess = true;
                });

                if (!allowAccess) {
                    element.children().remove();
                    element.remove();
                }
            }
        };

    }]);
})();