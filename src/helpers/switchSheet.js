export function switchSheet(workbook, sheetName = "GDP per capita map") {
  workbook.activateSheetAsync(sheetName);
}
