angular.module('appblogsCtrl',['blogsCtrl'])
.config(function($stateProvider){
    $stateProvider

       .state('app.blogs',{
          url:"/blogs",
          controller: 'blgsCtrl',
          templateUrl: "modules/blogs/template/blogs.html"
       })
})