'use strict';

var app = angular.module('myApp', ['ui.router','apphomeAdd','appblogsCtrl','appadminCtrl','appaskCtrl','appaboutCtrl']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/app/home");
      
      $stateProvider
  .state('app', {
      url: "/app",
      abstract: true
  });
}]);


