import React, { useState } from "react";
import FilterPanel from "./components/FilterPanel";
import MeasuresGrid from "./components/MeasuresGrid";
import "./App.css";

const App = () => {
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  // Handle changes from the FilterPanel for both priorities and sectors
  const handleFilterChange = (priorities, sectors) => {
    setSelectedPriorities(priorities);
    setSelectedSectors(sectors);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FilterPanel onFilterChange={handleFilterChange} />
      </div>
      <div className="main-content">
        <h1>Top Measures</h1>
        <MeasuresGrid
          selectedPriorities={selectedPriorities}
          selectedSectors={selectedSectors}
        />
      </div>
    </div>
  );
};

export default App;
