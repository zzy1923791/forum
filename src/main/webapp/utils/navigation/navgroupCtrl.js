/**
 * Created by yuume on 17/1/18.
 */
'use strict';

angular.module('utils.navgroup', ['ui.router'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('navgroup', {
                url:'/navgroup',
                templateUrl:'/utils/navigation/navgroup.html'
            })
    }])

