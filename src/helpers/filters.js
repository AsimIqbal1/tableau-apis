export function filterSingleValue(
  tableau,
  activeSheet,
  filterName = "Region",
  value = "Europe"
) {
  activeSheet.applyFizlterAsync(
    filterName,
    value,
    tableau.FilterUpdateType.REPLACE
  );
}

export function addValuesToFilter(
  tableau,
  activeSheet,
  filterName = "Region",
  value = ["Europe", "Middle East"]
) {
  activeSheet.applyFilterAsync(filterName, value, tableau.FilterUpdateType.ADD);
}

export function removeValuesFromFilter(
  tableau,
  activeSheet,
  filterName = "Region",
  value = "Europe"
) {
  activeSheet.applyFilterAsync(
    filterName,
    value,
    tableau.FilterUpdateType.REMOVE
  );
}

export function filterRangeOfValues(
  tableau,
  activeSheet,
  filterName = "F: GDP per capita (curr $)",
  rangeValue = { min: 40000, max: 60000 }
) {
  activeSheet.applyRangeFilterAsync(
    filterName,
    rangeValue,
    tableau.FilterUpdateType.REPLACE
  );
}

export function clearFilters(
  activeSheet,
  filters = ["Region", "F: GDP per capita (curr $)"]
) {
  filters.forEach((filterName) => {
    activeSheet.clearFilterAsync(filterName);
  });
}
