const top5FilterButton = document.getElementById("top-5-filter-button");

top5FilterButton.addEventListener("click", async () => {
  const countryFilter = document.getElementById(
      "top-5-country-filter-input"
  ).value;
  const stateFilter = document.getElementById("top-5-state-filter-input").value;
  const cityFilter = document.getElementById("top-5-city-filter-input").value;
  const occupationFilter = document.getElementById(
      "top-5-occupation-filter-input"
  ).value;
  const areaFilter = document.getElementById("top-5-area-filter-input").value;
  const groupFilter = document.getElementById("top-5-group-filter-input").value;
  const filters = [
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

  const queryParams =
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

  const response = await getTop5Evolution(queryParams !== "?" ? queryParams : "");
  buildTable(response);
});
