angular.module('appadminCtrl',['adminCtrl'])
.config(function($stateProvider){
    $stateProvider

       .state('app.admin',{
          url:"/admin",
          controller: 'admCtrl',
          templateUrl: "modules/admin/template/admin.html"
       })
})