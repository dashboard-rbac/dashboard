const top5FilterButton = document.getElementById("top-5-filter-button");

top5FilterButton.addEventListener("click", async () => {
  console.log("Filtering top 5 users");
  var countryFilter = document.getElementById(
    "top-5-country-filter-input"
  ).value;
  var stateFilter = document.getElementById("top-5-state-filter-input").value;
  var cityFilter = document.getElementById("top-5-city-filter-input").value;
  var occupationFilter = document.getElementById(
    "top-5-occupation-filter-input"
  ).value;
  var areaFilter = document.getElementById("top-5-area-filter-input").value;
  var groupFilter = document.getElementById("top-5-group-filter-input").value;
  var filters = [
    {
      country: countryFilter,
    },
    {
      state: stateFilter,
    },
    {
      city: cityFilter,
    },
    {
      occupation: occupationFilter,
    },
    {
      area: areaFilter,
    },
    {
      group: groupFilter,
    },
  ];

  var queryParams =
    "?" +
    filters
      .filter(
        (filter) =>
          Object.values(filter)[0] !== undefined &&
          Object.values(filter)[0].trim() !== ""
      )
      .map((filter) => {
        const key = Object.keys(filter)[0];
        const value = filter[key];
        return `${key}=${value}`;
      })
      .join("&");

  var response = await getTop5Evolution(queryParams != "?" ? queryParams : "");
  buildTable(response);
});
