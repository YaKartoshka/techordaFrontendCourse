var posts = document.getElementById("posts");

var app = angular.module('myApp', []);

app.controller('myCtrl',async function($scope, $http) {
  var comments = await getComments();
  $http({
    method : "GET",
    url : "https://jsonplaceholder.typicode.com/posts"
  }).then(async function setData(response) {
  
    $scope.data = response.data;
    $scope.getComments = function(id){
      var post_comments = comments.filter((comment)=>{
        if(comment.postId=id){
          return comment
        }
      })
      return post_comments; 
    }
      
    }, function error(response) {
      $scope.data = response.statusText;
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
