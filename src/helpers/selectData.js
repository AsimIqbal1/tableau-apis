export function selectSingleValue(tableau, workbook, filterName = "Region") {
  workbook
    .getActiveSheet()
    .selectMarksAsync(filterName, "Asia", tableau.SelectionUpdateType.REPLACE);
}
