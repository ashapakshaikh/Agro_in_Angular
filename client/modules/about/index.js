angular.module('appaboutCtrl',['aboutCtrl'])
.config(function($stateProvider){
    $stateProvider

       .state('app.about',{
          url:"/about",
          controller: 'abtCtrl',
          templateUrl: "modules/about/template/about.html"
       })
})


