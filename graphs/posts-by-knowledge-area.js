// table-user
const people = [
  {
    name: "Ana Silva",
    fieldOfStudy: "Ensino Superior",
    occupation: "Estudante",
    location: "São Paulo, Brasil",
    RBACnucleus: "Núcleo Região Metropolitana de São Paulo - MRSP",
    numberOfPosts: 10,
    numberOfInteractions: 50
  },
  {
    name: "João Santos Almeida Amorin Campos",
    fieldOfStudy: "Ensino Superior",
    occupation: "Estudante",
    location: "Rio de Janeiro, Brasil",
    RBACnucleus: "Núcleo Região Metropolitana do Rio de Janeiro - MRJ",
    numberOfPosts: 32,
    numberOfInteractions: 30
  },
  {
    name: "Maria Oliveira",
    fieldOfStudy: "Ensino Superior",
    occupation: "Professora",
    location: "Lisboa, Portugal",
    RBACnucleus: "Núcleo Região Metropolitana de Lisboa - MRL",
    numberOfPosts: 10,
    numberOfInteractions: 50
  },
  {
    name: "Carlos Fernandes",
    fieldOfStudy: "Ensino Superior",
    occupation: "Estudante",
    location: "Miami, EUA",
    RBACnucleus: "Núcleo Região Metropolitana de Miami - MRM",
    numberOfPosts: 20,
    numberOfInteractions: 40
  },
  {
    name: "Luísa Costa",
    fieldOfStudy: "Ensino Superior",
    occupation: "Estudante",
    location: "Tokyo, Japão",
    RBACnucleus: "Núcleo Região Metropolitana de Tokyo - MRT",
    numberOfPosts: 8,
    numberOfInteractions: 25
  },
  {
    name: "Pedro Almeida",
    fieldOfStudy: "Ensino Superior",
    occupation: "Estudante",
    location: "Lisboa, Portugal",
    RBACnucleus: "Núcleo Região Metropolitana de Lisbon - MRL",
    numberOfPosts: 12,
    numberOfInteractions: 35
  },
  {
    name: "Sofia Ramos",
    fieldOfStudy: "Ensino Superior",
    occupation: "Estudante",
    location: "Paris, França",
    RBACnucleus: "Núcleo Região Metropolitana de Paris - MRP",
    numberOfPosts: 6,
    numberOfInteractions: 45
  }
];

const tabela = document.getElementById("table-people");
const tbody = document.getElementById("table");

function updateTable() {
  people.sort((a, b) => (a.numberOfInteractions + a.numberOfPosts > b.numberOfInteractions + b.numberOfPosts) ? -1 : 1);

  const top5 = people.slice(0, 5);

  tbody.innerHTML = "";

  top5.forEach(people => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${formatText(people.name)}</td>
    <td>${formatText(people.fieldOfStudy)}</td>
    <td>${formatText(people.occupation)}</td>
    <td>${formatText(people.location)}</td>
    <td>${formatText(people.RBACnucleus)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function formatText(text) {
  const limiteCaracteres = 70;
  if (text.length > limiteCaracteres) {
    return text.substring(0, limiteCaracteres) + "...";
  } else {
    return text;
  }
}
updateTable();

// line-charts
var labels = [
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
];

var data = [
  300, 300, 170, 100, 350, 350, 300, 580, 580, 250, 80, 595, 580, 570, 270,
];

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
