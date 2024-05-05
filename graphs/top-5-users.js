const people = [
  {
    name: "Ana Silva",
    area: "Ensino Superior",
    occupation: "Estudante",
    city: "Valinhos",
    state: "São Paulo",
    country: "Brasil",
    group: "Núcleo Região Metropolitana de São Paulo - MRSP",
  },
  {
    name: "João Santos Almeida Amorin Campos",
    area: "Ensino Superior",
    occupation: "Estudante",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    country: "Brasil",
    group: "Núcleo Região Metropolitana do Rio de Janeiro - MRJ",
  },
  {
    name: "Maria Oliveira",
    area: "Ensino Superior",
    occupation: "Professora",
    city: "Lisboa",
    state: "Estremadura Ribatejo",
    country: "Portugal",
    group: "Núcleo Região Metropolitana de Lisboa - MRL",
  },
  {
    name: "Carlos Fernandes",
    area: "Ensino Superior",
    occupation: "Estudante",
    city: "Miami",
    state: "Flórida",
    country: "EUA",
    group: "Núcleo Região Metropolitana de Miami - MRM",
  },
  {
    name: "Luísa Costa",
    area: "Ensino Superior",
    occupation: "Estudante",
    city: "Tokyo",
    state: "Kanto",
    country: "Japão",
    group: "Núcleo Região Metropolitana de Tokyo - MRT",
  },
  {
    name: "Pedro Almeida",
    area: "Ensino Superior",
    occupation: "Estudante",
    city: "Lisboa",
    state: "Estremadura Ribatejo",
    country: "Portugal",
    group: "Núcleo Região Metropolitana de Lisbon - MRL",
  },
  {
    name: "Sofia Ramos",
    area: "Ensino Superior",
    occupation: "Estudante",
    city: "Paris",
    state: "Île-de-France",
    country: "França",
    group: "Núcleo Região Metropolitana de Paris - MRP",
  },
];

const tbody = document.getElementById("table-top-5-people-content");

function updateTable() {
  people.sort((a, b) =>
    a.numberOfInteractions + a.numberOfPosts >
    b.numberOfInteractions + b.numberOfPosts
      ? -1
      : 1
  );

  const top5 = people.slice(0, 5);

  tbody.innerHTML = "";

  top5.forEach((people) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${formatText(people.name)}</td>
    <td>${formatText(people.area)}</td>
    <td>${formatText(people.occupation)}</td>
    <td>${formatText(people.city)}, ${formatText(people.state)}, ${formatText(
      people.country
    )}</td>
    <td>${formatText(people.group)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function formatText(text) {
  const maxLength = 70;
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
}

updateTable();
