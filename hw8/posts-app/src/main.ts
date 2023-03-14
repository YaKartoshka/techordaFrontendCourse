import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  var posts = document.getElementById("posts");

  var app = angular.module('myApp', []);
  
  app.controller('myCtrl',async function($scope, $http) {
    var comments = await getComments();
    $http({
      method : "GET",
      url : "https://jsonplaceholder.typicode.com/posts"
    }).then(async function setData(response) {
    
      $scope.data = response.data;
      $scope.getComments = function(id:number){
        var post_comments = comments.filter((comment: {postId:number})=>{
          if(comment.postId=id){
            return comment
          }
        })
        return post_comments; 
      }
        
      }, function error() {
        console.log('error')
    });
  });
   
    const getComments = async() =>{
    const data = $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      type: "get",
      dataType: "json",
      success: function (res) {
        
        return res;
      },
      error: function (err) {
        console.log(err);
      },
    });
    return data;
  }
  