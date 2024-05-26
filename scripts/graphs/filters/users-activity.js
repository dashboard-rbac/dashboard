const usersActivityButton = document.getElementById(
    "users-activity-filter-button"
);

usersActivityButton.addEventListener("click", async () => {
  const countryFilter = document.getElementById(
      "users-activity-country-filter-input"
  ).value;
  const stateFilter = document.getElementById(
      "users-activity-state-filter-input"
  ).value;
  const cityFilter = document.getElementById(
      "users-activity-city-filter-input"
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

  const response = await getUsersActivity(
      queryParams !== "?" ? queryParams : ""
  );
  buildUsersActivityGraph(response);
});
