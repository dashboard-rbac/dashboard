const buildUsersActivityGraph = (labels, comments, likes, posts) => {
  var ctx = document.getElementById("user-activity");
  var chartGraph = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Comentários",
          data: comments,
          borderWidth: 1,
          borderColor: "rgba(17,146,232,1)",
          backgroundColor: "rgba(17,146,232,0.9)",
        },
        {
          label: "Curtidas",
          data: likes,
          borderWidth: 1,
          borderColor: "rgba(105,41,196,1)",
          backgroundColor: "rgba(105,41,196,1)",
        },
        {
          label: "Postagens",
          data: posts,
          borderWidth: 1,
          borderColor: "rgba(17,232,64,1)",
          backgroundColor: "rgba(17,232,64,1)",
        },
      ],
    },
  });
};

(async () => {
  let labels = [];
  let comments = [];
  let likes = [];
  let posts = [];

  var response = await getUsersActivity();
  response.forEach((v) => {
    labels.push(v.date);
    comments.push(v.comments);
    likes.push(v.likes);
    posts.push(v.posts);
  });

  buildUsersActivityGraph(labels, comments, likes, posts);
})();
