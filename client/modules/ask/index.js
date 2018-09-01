angular.module('appaskCtrl',['askCtrl'])
 .config(function($stateProvider){
 	$stateProvider

 	   .state('app.ask', {
          url:"/ask",
          controller:'asCtrl',
          templateUrl: "modules/ask/template/ask.html"

 	   })

 })