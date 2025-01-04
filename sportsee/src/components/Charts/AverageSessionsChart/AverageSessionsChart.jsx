import PropTypes from "prop-types";
import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./AverageSessionsChart.css";

const AverageSessionsChart = ({ sessionData }) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  // Tooltip personnalisé
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="average-session-chart-container">
      <p className="average-session-chart-title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessionData}>
          <XAxis
            dataKey="day"
            tickFormatter={(day) => days[day - 1]}
            tick={{ fill: "#fff", fontSize: 12 , opacity:0.6 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              strokeWidth: 15,
              stroke: "#ffffff33",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Validation des props
AverageSessionsChart.propTypes = {
  sessionData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSessionsChart;
