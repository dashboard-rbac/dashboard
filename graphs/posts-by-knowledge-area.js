const buildPostsByKnowledgeAreaGraph = (labels, data) => {
  var ctx = document.getElementById("posts-by-knowledge-area");
  var chartGraph = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Quantidade de postagens por área de conhecimento",
          data: data,
          borderWidth: 1,
          borderColor: "rgba(17,146,232,1)",
          backgroundColor: "rgba(17,146,232,0.9)",
        },
      ],
    },
  });
};

(async() => {
  let labels = [];
  let data = [];

  var response = await getPostsByKnowledgeArea();
  response.forEach((v) => {
    labels.push(v.area);
    data.push(v.posts);
  });

  buildPostsByKnowledgeAreaGraph(labels, data);
})()
