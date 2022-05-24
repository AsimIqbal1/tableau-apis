import React, { useEffect, useState } from "react";
import FiltersApi from "./FiltersApi";

function MainAPI(props) {
  const [visibleSheets, setVisibleSheets] = useState([]);

  const renderFiltersSheet = () => {
    setVisibleSheets([...visibleSheets, <FiltersApi />]);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        {visibleSheets.map((sheet, index) => (
          <div key={index}>
            {sheet}
            <br />
            <br />
          </div>
        ))}
      </div>
      <button onClick={renderFiltersSheet}>Show Filters Example</button>
    </div>
  );
}

export default MainAPI;
