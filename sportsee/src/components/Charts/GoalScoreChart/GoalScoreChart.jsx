import PropTypes from "prop-types";
import React from "react";
import GoalScoreProgress from "../GoalScoreProgress/GoalScoreProgress";
import "./GoalScoreChart.css";

function GoalScoreChart({ goalPercentage }) {
  if (goalPercentage === undefined) {
    return <p className="chart-error">Score du jour indisponible</p>;
  }

  return (
    <div className="goal-score-chart-container">
      <h3 className="goal-score-chart-title">Score</h3>
      <div className="progress-bar-wrapper">
      <GoalScoreProgress percentage={goalPercentage || 0} />
      </div>
    </div>
  );
}

// Validation des props
GoalScoreChart.propTypes = {
  goalPercentage: PropTypes.number.isRequired,
};

export default GoalScoreChart;
