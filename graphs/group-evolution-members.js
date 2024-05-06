var ctx = document.getElementById("group-evolution-members");
var chartGraph = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Novos Grupos",
                data: data1,
                borderWidth: 1,
                borderColor: "rgba(17,146,232,1)",
                backgroundColor: "rgba(17,146,232,0.9)",
            },
            {
                label:  "Novos Membros",
                data: data2,
                borderWidth: 1,
                borderColor: "rgba(105,41,196,1)",
                backgroundColor: "rgba(105,41,196,1)",
            }
        ],
    },
});

(async() => {
    let labels = [];
    let groups = [];
    let members = [];
  
    var groupsResponse = await getGroupsEvolution();
    groupsResponse.forEach((v) => {
      labels.push(v.date);
      let groups = [];
      groups.push(v.posts);
    });
  
    buildPostsByKnowledgeAreaGraph(labels, data);
  })()