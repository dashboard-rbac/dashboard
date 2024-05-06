function buildGroupAndUsersGraph(labels, groups, users) {
  var ctx = document.getElementById("group-and-users-evolution");
  var chartGraph = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Novos Grupos",
          data: groups,
          borderWidth: 1,
          borderColor: "rgba(17,146,232,1)",
          backgroundColor: "rgba(17,146,232,0.9)",
        },
        {
          label: "Novos Membros",
          data: users,
          borderWidth: 1,
          borderColor: "rgba(105,41,196,1)",
          backgroundColor: "rgba(105,41,196,1)",
        },
      ],
    },
  });
}

(async () => {
  let labels = [];
  let groups = [];
  let users = [];

  var groupsAndUsersResponse = await getGroupsAndUsersEvolution();
  groupsAndUsersResponse.forEach((v) => {
    labels.push(v.date);
    groups.push(v.groups);
    users.push(v.users);
  });

  buildGroupAndUsersGraph(labels, groups, users);
})();
