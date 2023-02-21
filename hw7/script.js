var posts = document.getElementById("posts");

async function showPosts() {
  var commments = await getComments();
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "get",
    dataType: "json",
    success: function (res) {
      var data = res;
      data.forEach((post_data) => {
        var post_div = document.createElement("div");
        var title = document.createElement("h1");
        var post_text = document.createElement("p");
        var post_comments = document.createElement("div");
        var comments=document.createElement('h2');
        comments.innerHTML="Comments:"
        post_div.classList.add('post')
        title.classList.add('title');
        post_text.classList.add('post_text')
        post_comments.classList.add('post_comments')
        commments.forEach((comment_data) => {
          if ((comment_data.postId == post_data.id)) {
            console.log(comment_data.postId , post_data.id)
            var post_comment_block = document.createElement("div");
            var post_comment_text = document.createElement("p");
            var post_comment_author=document.createElement('h3')

            post_comment_text.innerHTML=comment_data.body;
            post_comment_author.innerHTML=comment_data.email;

            post_comment_block.innerHTML=post_comment_author.outerHTML + post_comment_text.outerHTML;
            post_comments.innerHTML=post_comments.innerHTML+post_comment_block.outerHTML;
          }
        });
        post_div.id = post_data.id;
        title.innerHTML = post_data.title;
        post_text.innerHTML = post_data.body;

        post_div.innerHTML = title.outerHTML + post_text.outerHTML+ comments.outerHTML + post_comments.outerHTML;
        posts.insertAdjacentElement('afterbegin',post_div)
      });
    },
    error: function (err) {
      console.log(err);
    },
  });
}
async function getComments() {
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
showPosts();
