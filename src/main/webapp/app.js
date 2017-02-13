/**
 * Created by yuume on 17/1/18.
 */
'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//     'ngRoute',
//     'myApp.user',
//     'myApp.role'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//     $locationProvider.hashPrefix('!');
//
//     $routeProvider
//         .when('/',{template:'这是首页'})
//         .otherwise({redirectTo: '/'});
// }]);


angular.module('myApp',[
    'ui.router',
    'utils.user',
    'modules.role'
])

    .config(['$stateProvider', function($stateProvider){

    // //解决路由异常的办法在这里
    // $urlRouteProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: '/home.html',
        })
    }])
