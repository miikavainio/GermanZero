import React from "react";

const MeasureDetailsModal = ({ measure, onClose }) => {
  if (!measure) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{measure.title}</h2>
        <p>
          <strong>Code:</strong> {measure.code}
        </p>
        <p>
          <strong>Sector:</strong> {measure.sector}
        </p>
        <p>
          <strong>Priority:</strong> {"★".repeat(measure.priority)}
        </p>

        {/* Additional info about the measure */}
        <p>
          <strong>Description:</strong> This measure focuses on{" "}
          {measure.description}.
        </p>

        {/* Add more detailed information as needed */}

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MeasureDetailsModal;
