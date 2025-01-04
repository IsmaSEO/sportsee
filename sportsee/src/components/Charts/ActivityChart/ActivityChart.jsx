import PropTypes from "prop-types";
import React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./ActivityChart.css";

function ActivityChart({ activityData }) {
  if (!activityData || activityData.length === 0) {
    return <p className="chart-error">Données d'activité indisponibles</p>;
  }

  const formattedData = activityData.slice(0, 10).map((data, index) => ({
    ...data,
    day: index + 1,
  }));

  return (
    <div className="activity-chart-container">
      <div className="activity-chart-header">
        <h2 className="activity-chart-title">Activité quotidienne</h2>
        <div className="activity-legend">
          <div className="legend-item">
            <span className="legend-dot black"></span>
            Poids (kg)
          </div>
          <div className="legend-item">
            <span className="legend-dot red"></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={formattedData}
          barGap={8}
          barCategoryGap="25%"
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          {/* Axe des X */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#dedede" }}
            tick={{ fill: "#9b9b9b", fontSize: "0.9rem" }}
          />

          {/* Axe Y gauche pour les calories */}
          <YAxis
            yAxisId="left"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9b9b9b", fontSize: "0.9rem" }}
            domain={[0, "dataMax + 100"]}
          />

          {/* Axe Y droit pour le poids */}
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9b9b9b", fontSize: "0.9rem" }}
            domain={[69, "dataMax + 3"]}
          />

          {/* Grille */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Tooltip */}
          <Tooltip
            cursor={{ fill: "rgba(196, 196, 196, 0.5)"}}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="custom-tooltip">
                    <p className="tooltip-line">{`${payload[0]?.value}kg`}</p>
                    <p className="tooltip-line">{`${payload[1]?.value}kcal`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          
          {/* Barres */}
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={10}
          />

          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Validation des props
ActivityChart.propTypes = {
  activityData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

export default ActivityChart;
