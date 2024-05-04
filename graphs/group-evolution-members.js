var labels = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
];

var data1 = [
    100,115,125,170,270,500,760,950,1080,1100,1120,1130
];

var data2 = [
    950,580,530,700,780,800,400,670,425,580
]

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
                label:  "Novos membros",
                data: data2,
                borderWidth: 1,
                borderColor: "rgba(105,41,196,1)",
                backgroundColor: "rgba(105,41,196,1)",
            }
        ],
    },
});