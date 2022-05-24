import React, { useEffect, useRef } from "react";
import {
  addValuesToFilter,
  clearFilters,
  filterRangeOfValues,
  filterSingleValue,
  removeValuesFromFilter,
} from "../helpers/filters";
const { tableau } = window;

function BasicEmbed(props) {
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

  useEffect(initViz, []);

  return (
    <div>
      <h1>{props.location.state.title}</h1>
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

      <button
        onClick={() =>
          clearFilters(activeSheet, ["Region", "F: GDP per capita (curr $)"])
        }
      >
        Clear Filters
      </button>
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default BasicEmbed;
