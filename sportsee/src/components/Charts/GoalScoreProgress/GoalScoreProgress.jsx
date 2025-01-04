import PropTypes from "prop-types";
import React from "react";
import "./GoalScoreProgress.css";

function GoalScoreProgress({ percentage }) {
  const radius = 55; 
  const strokeWidth = 10; // Épaisseur de la bordure
  const circumference = 2 * Math.PI * radius; // Circonférence du cercle
  const dashOffset = circumference * (percentage / 100); // Inversé pour commencer dans le sens opposé

  return (
    <svg width="140" height="140" className="goal-score-progress">
      {/* Cercle d'arrière-plan */}
      <circle
        className="circle-background"
        cx="70"
        cy="70"
        r={radius}
        strokeWidth={strokeWidth}
      />
      {/* Cercle de progression */}
      <circle
        className="circle-progress"
        cx="70"
        cy="70"
        r={radius}
        strokeWidth={strokeWidth}
        transform="rotate(90 70 70)" // Inversé pour que la progression démarre de l'autre côté
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: dashOffset,
        }}
      />
      {/* Cercle blanc central */}
      <circle
        className="circle-center"
        cx="70"
        cy="70"
        r={radius - strokeWidth}
        fill="#ffffff"
      />
      {/* Texte au centre */}
      <text x="50%" y="45%" textAnchor="middle" className="progress-percentage">
        {percentage}%
      </text>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        className="progress-goal"
        dy="0.5rem" /* Ajouté pour forcer le texte à se positionner correctement */
      >
        de votre
        <tspan x="50%" dy="1.2rem">objectif</tspan> {/* Coupure sur deux lignes */}
      </text>
    </svg>
  );
}

// Validation des props
GoalScoreProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default GoalScoreProgress;
