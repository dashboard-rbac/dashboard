var ctx = document.getElementsByClassName("line-chart");
var chartGraph = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Artes visuais e performáticas",
      "Conhecimentos gerais",
      "Lingua portuguesa",
      "Tecnologia e Inovação",
      "História",
      "Ciências",
      "Geografia",
      "Matemática",
      "Física",
      "Sociologia",
      "Biologia",
      "Filosofia",
      "Química",
      "Educação física",
      "Ensino religioso",
    ],
    datasets: [
      {
        label: "Quantidade de postagens por área de conhecimento",
        data: [
          300, 300, 170, 100, 350, 350, 300, 580, 580, 250, 80, 595, 580, 570,
          270,
        ],
        borderWidth: 1,
        borderColor: "rgba(17,146,232,1)",
        backgroundColor: "rgba(17,146,232,0.9)",
      },
    ],
  },
});
