import React, { useState } from "react";
import MeasureCard from "./MeasureCard";
import MeasureDetailsModal from "./MeasureDetailsModal";

const MeasuresGrid = ({ selectedPriorities, selectedSectors }) => {
  const measures = [
    {
      title: "Designation of wind power sites...",
      sector: "Energy",
      priority: 4,
      code: "TOP001",
      description: "...wind power...",
    },
    {
      title: "Support the implementation of...",
      sector: "Energy",
      priority: 3,
      code: "TOP002",
      description: "...energy infrastructure...",
    },
    {
      title: "Photovoltaic coverage of all...",
      sector: "Energy",
      priority: 3,
      code: "TOP003",
      description: "...solar panels...",
    },
    {
      title: "Expansion of public transportation...",
      sector: "Transport",
      priority: 4,
      code: "TOP004",
      description: "...public transportation...",
    },
    {
      title: "Promotion of electric vehicle...",
      sector: "Transport",
      priority: 2,
      code: "TOP005",
      description: "...electric vehicles...",
    },
    {
      title: "Implementation of energy-saving...",
      sector: "Buildings",
      priority: 4,
      code: "TOP006",
      description: "...energy saving...",
    },
    {
      title: "Incentives for energy-efficient...",
      sector: "Buildings",
      priority: 3,
      code: "TOP007",
      description: "...energy-efficient buildings...",
    },
    {
      title: "Waste reduction and recycling...",
      sector: "Waste Management",
      priority: 2,
      code: "TOP008",
      description: "...waste management...",
    },
    {
      title: "Tax incentives for solar panel...",
      sector: "Finance",
      priority: 3,
      code: "TOP009",
      description: "...solar incentives...",
    },
    {
      title: "Water conservation initiatives...",
      sector: "Water",
      priority: 2,
      code: "TOP010",
      description: "...water conservation...",
    },
  ];

  const [selectedMeasure, setSelectedMeasure] = useState(null);

  // Filter measures based on selected priorities and sectors
  const filteredMeasures = measures.filter((measure) => {
    const priorityMatch = selectedPriorities.length
      ? selectedPriorities.includes(measure.priority)
      : true;

    const sectorMatch = selectedSectors.length
      ? selectedSectors.includes(measure.sector)
      : true;

    return priorityMatch && sectorMatch;
  });

  return (
    <div className="measures-grid">
      {filteredMeasures.map((measure, index) => (
        <MeasureCard
          key={index}
          title={measure.title}
          sector={measure.sector}
          priority={measure.priority}
          code={measure.code}
          onOpenDetails={(measure) => setSelectedMeasure(measure)} // Open the modal with this measure's details
        />
      ))}

      {/* Show modal if a measure is selected */}
      {selectedMeasure && (
        <MeasureDetailsModal
          measure={selectedMeasure}
          onClose={() => setSelectedMeasure(null)} // Close modal
        />
      )}
    </div>
  );
};

export default MeasuresGrid;
