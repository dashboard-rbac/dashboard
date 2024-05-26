const groupAndUsersButton = document.getElementById(
    "groups-and-users-evolution-filter-button"
);

groupAndUsersButton.addEventListener("click", async () => {
  const countryFilter = document.getElementById(
      "groups-and-users-evolution-country-filter-input"
  ).value;
  const stateFilter = document.getElementById(
      "groups-and-users-evolution-state-filter-input"
  ).value;
  const cityFilter = document.getElementById(
      "groups-and-users-evolution-city-filter-input"
  ).value;
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

  const response = await getGroupsAndUsersEvolution(
      queryParams !== "?" ? queryParams : ""
  );
  buildGroupsAndUsersGraph(response);
});
