import React from "react";

const MeasureCard = ({ title, sector, priority, code, onOpenDetails }) => {
  return (
    <div className="measure-card">
      <div className="card-header">
        <span className="sector">{sector}</span>
        <div className="stars">{"★".repeat(priority)}</div>
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p>{code}</p>
      </div>
      <div className="card-footer">
        <button
          className="arrow-button"
          onClick={() =>
            onOpenDetails({
              title,
              sector,
              priority,
              code,
              description: "detailed description here",
            })
          }
        >
          ➔
        </button>
      </div>
    </div>
  );
};

export default MeasureCard;
