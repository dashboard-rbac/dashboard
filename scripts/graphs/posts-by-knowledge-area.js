let postsByKnowledgeAreaChart;

const buildPostsByKnowledgeAreaGraph = (data) => {
  let labels = [];
  let posts = [];

  data.forEach((v) => {
    labels.push(v.area);
    posts.push(v.posts);
  });

  const ctx = document.getElementById("posts-by-knowledge-area");

  if (postsByKnowledgeAreaChart) {
    postsByKnowledgeAreaChart.destroy();
  }

  postsByKnowledgeAreaChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Quantidade de postagens por área de conhecimento",
          data: posts,
          borderWidth: 1,
          borderColor: "rgba(17,146,232,1)",
          backgroundColor: "rgba(17,146,232,0.9)",
        },
      ],
    },
  });
};

(async () => {
  const response = await getPostsByKnowledgeArea();
  buildPostsByKnowledgeAreaGraph(response);
})();
