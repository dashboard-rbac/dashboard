const postsByKnowledgeAreaButton = document.getElementById(
  "posts-by-knowledge-area-filter-button"
);

postsByKnowledgeAreaButton.addEventListener("click", async () => {
  const countryFilter = document.getElementById(
      "posts-by-knowledge-area-country-filter-input"
  ).value;
  const stateFilter = document.getElementById(
      "posts-by-knowledge-area-state-filter-input"
  ).value;
  const cityFilter = document.getElementById(
      "posts-by-knowledge-area-city-filter-input"
  ).value;

  const form = document.getElementById("posts-by-knowledge-area-bncc-filter-form");
  const formData = new FormData(form);
  const selectedCompetencies = Array.from(form.querySelectorAll('input[name="bncc-competencies"]:checked'))
      .map(input => input.value);

  const filters = [
    {
      bncc: selectedCompetencies,
    },
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
console.log(filters)
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

  const response = await getPostsByKnowledgeArea(
      queryParams !== "?" ? queryParams : ""
  );
  buildPostsByKnowledgeAreaGraph(response);
});
