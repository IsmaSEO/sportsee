import PropTypes from "prop-types";
import React from "react";
import KeyCard from "./KeyCard/KeyCard";
import "./KeyMetrics.css";

/**
 * Composant affichant l'ensemble des cartes avec leurs métriques clés
 * @param {object} metrics -  Objet contenant les données des valeurs pour les calories, les protéines, les glucides et les lipides.
 */

function KeyMetrics({ metrics }) {
  return (
    <div className="metrics-panel">
      <KeyCard image="/assets/icons/calories.svg" title={`${metrics.calorieCount}kCal`} description="Calories" />
      <KeyCard image="/assets/icons/proteines.svg" title={`${metrics.proteinCount}g`} description="Protéines" />
      <KeyCard image="/assets/icons/glucides.svg" title={`${metrics.carbohydrateCount}g`} description="Glucides" />
      <KeyCard image="/assets/icons/lipides.svg" title={`${metrics.lipidCount}g`} description="Lipides" />
    </div>
  );
}

// Validation des props
KeyMetrics.propTypes = {
  metrics: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default KeyMetrics;
