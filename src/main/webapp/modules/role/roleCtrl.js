/**
 * Created by yuume on 17/1/19.
 */

angular.module('modules.role', ['ui.router'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('role', {
                url:'/role',
                views: {
                    '': {
                        templateUrl: '/modules/role/role.html'
                    },
                    'user@role': {
                        templateUrl:'/utils/user/user.html',
                        controller: function ($scope, $http) {
                            $http.get("/utils/user/users.json")
                                .success(function (response) {
                                    $scope.users = response.users;
                                })
                        }
                    }
                }
            })
    }])


