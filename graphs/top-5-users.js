const tbody = document.getElementById("table-top-5-people-content");

function buildTable(data) {
  tbody.innerHTML = "";

  data.forEach((person) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${formatText(person.name)}</td>
    <td class="responsivity-td">${formatText(person.area)}</td>
    <td class="responsivity-td">${formatText(person.occupation)}</td>
    <td>${formatText(person.city)}, ${formatText(person.state)}, ${formatText(
      person.country
    )}</td>
    <td>${formatText(person.group)}</td>
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

(async () => {
  var response = await getTop5Evolution();

  buildTable(response);
})();
