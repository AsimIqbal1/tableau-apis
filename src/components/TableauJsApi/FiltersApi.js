import React, { useEffect, useRef } from "react";
import {
  addValuesToFilter,
  clearFilters,
  filterRangeOfValues,
  filterSingleValue,
  removeValuesFromFilter,
} from "../../helpers/filters";
import { selectSingleValue } from "../../helpers/selectData";
import { switchSheet } from "../../helpers/switchSheet";
const { tableau } = window;
console.log("WINDOW: ", tableau);
function FiltersApi(props) {
  const ref = useRef(null);

  let workbook, activeSheet;

  const initViz = () => {
    var url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
    var options = {
      width: ref.offsetWidth,
      height: ref.offsetHeight,
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      },
    };
    var viz = new tableau.Viz(ref.current, url, options);
  };

  const renderMapsSheet = () => {
    switchSheet(workbook);
  };

  useEffect(initViz, []);

  return (
    <div>
      <h1>{"Filters API"}</h1>
      <div style={setVizStyle} ref={ref} />

      <button
        onClick={() =>
          filterSingleValue(tableau, activeSheet, "Region", "Europe")
        }
      >
        Show Europe Only (Update Filter)
      </button>

      <button
        onClick={() =>
          addValuesToFilter(tableau, activeSheet, "Region", [
            "Europe",
            "Middle East",
          ])
        }
      >
        Add Europe and Middle East (Add values to filter)
      </button>

      <button
        onClick={() =>
          removeValuesFromFilter(tableau, activeSheet, "Region", "Europe")
        }
      >
        Remove Europe from Filter (Remove value from filter)
      </button>
      <br />

      <button
        onClick={() =>
          filterRangeOfValues(
            tableau,
            activeSheet,
            "F: GDP per capita (curr $)",
            { min: 40000, max: 60000 }
          )
        }
      >
        Show countries having min: $40k and max $60k GDP (Apply range of
        filters)
      </button>

      <button onClick={() => selectSingleValue(tableau, workbook)}>
        Highlight Asia (Select single value)
      </button>

      <button
        onClick={() =>
          clearFilters(activeSheet, ["Region", "F: GDP per capita (curr $)"])
        }
      >
        Clear Filters
      </button>

      <button onClick={renderMapsSheet}>Show Map Sheet</button>
    </div>
  );
}

const setVizStyle = {
  // width: "800px",
  // height: "700px",
};

export default FiltersApi;
