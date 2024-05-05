var labels = [
    "Jan - 2022",
    "Fev - 2022",
    "Mar - 2022",
    "Abr - 2022",
    "Mai - 2022",
    "Jun - 2022",
    "Jul - 2022",
    "Ago - 2022",
    "Set - 2022",
    "Out - 2022",
    "Nov - 2022",
    "Dez - 2022",
    "Jan - 2023",
    "Fev - 2023",
    "Mar - 2023",
    "Abr - 2023",
];

var data1 = [
    600,500,640,570,290,320,840,860,920,950,770,700,660,130,230,440
];

var data2 = [
    430,750,840,650,350,500,925,910,1000,970,840,770,720,280,380,600
]

var data3 = [
    260,220,170,190,210,160,360,280,360,380,190,230,250,60,110,130
]

var ctx = document.getElementById("user-activity");
var chartGraph = new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Comentários",
                data: data1,
                borderWidth: 1,
                borderColor: "rgba(17,146,232,1)",
                backgroundColor: "rgba(17,146,232,0.9)",
            },
            {
                label:  "Curtidas",
                data: data2,
                borderWidth: 1,
                borderColor: "rgba(105,41,196,1)",
                backgroundColor: "rgba(105,41,196,1)",
            },
            {
                label:  "Postagens",
                data: data3,
                borderWidth: 1,
                borderColor: "rgba(17,232,64,1)",
                backgroundColor: "rgba(17,232,64,1)",
            }
        ],
    },
});