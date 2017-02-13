/**
 * Created by yuume on 17/1/19.
 */
(function(){
    angular.module('myApp')
        .controller('HomeController', ['dataService', 'notifier', '$state','$log', HomeController]);

    function HomeController(dataService, notifier, $state, $log){
        var vm = this;

        vm.message = 'Welcome to School Buddy';

        //使用$state服务
        vm.refresh = function(){
            $log.debug($state.current);
            $state.reload();
        }

        dataService.getAllSchools()
            .then(function(schools){
                vm.allSchools = schools;
                vm.schoolCount = schools.length;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function(classrooms){
                vm.allClassrooms = classrooms;
                vm.classroomCount = classrooms.length;
            })
            .catch(showError);

    }
}());