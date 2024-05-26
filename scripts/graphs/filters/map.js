const mapButton = document.getElementById("map-filter-button");

const NOMINATIN_URL = "https://nominatim.openstreetmap.org/search";

async function getCoordinates(query) {
  return fetch(`${NOMINATIN_URL}?${query}&format=json`)
      .then((response) => response.json())
      .then((data) => data[0])
      .then((data) => [data.lat, data.lon]);
}

mapButton.addEventListener("click", async () => {
  const countryFilter = document.getElementById(
      "map-country-filter-input"
  ).value;
  const stateFilter = document.getElementById("map-state-filter-input").value;
  const cityFilter = document.getElementById("map-city-filter-input").value;

  if (cityFilter === "" && stateFilter === "" && countryFilter === "") {
    return;
  }

  let zoom = 2;
  let query = "";

  if (countryFilter !== "") {
    zoom = 3;
    if (query !== "") query += "&";
    query += `country=${countryFilter}`;
  }

  if (stateFilter !== "") {
    zoom = 6;
    if (query !== "") query += "&";
    query += `state=${stateFilter}`;
  }

  if (cityFilter !== "") {
    zoom = 12;
    if (query !== "") query += "&";
    query += `city=${cityFilter}`;
  }

  if (query.trim() === "") return;

  const coordinates = await getCoordinates(query);
  changeMapFocus(coordinates, zoom);
});
