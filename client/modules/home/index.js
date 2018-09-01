angular.module('apphomeAdd',['homeCtrl'])
.config(function($stateProvider){
    $stateProvider

       .state('app.home',{
          url:"/add",
          controller: 'hmeCtrl',
          templateUrl: "modules/home/template/home.html"
       })
})