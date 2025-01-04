import PropTypes from "prop-types";
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import "./PerformanceChart.css";

function PerformanceChart({ performanceData }) {
  if (!performanceData || performanceData.length === 0) {
    return <p className="chart-error">Données de performance indisponibles</p>;
  }

  return (
    <div className="performance-chart-container">
      <h3 className="performance-chart-title">Performances</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={performanceData}>
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#FFFFFF", fontSize: 12 }}
          />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Validation des props
PerformanceChart.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default PerformanceChart;
