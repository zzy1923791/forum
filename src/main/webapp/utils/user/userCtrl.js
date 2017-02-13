/**
 * Created by yuume on 17/1/18.
 */
'use strict';

angular.module('utils.user', ['ui.router'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('user', {
                url:'/user',
                templateUrl:'/utils/user/user.html',
                controller: function ($scope, $http) {
                    $http.get("/utils/user/users.json")
                        .success(function (response) {
                            $scope.users = response.users;
                        })
                }
            })
    }])

