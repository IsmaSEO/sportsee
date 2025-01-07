import PropTypes from "prop-types";
import "./KeyCard.css";

/**
 * Composant Card pour afficher les métriques clés (calories, protéines etc).
 * @param {string} titre - La valeur principale affichée sur la carte.
 * @param {string} description - La légende de la valeur.
 * @param {string} image - L'icône de la métrique.
 */

function KeyCard({ title, description, image }) {
  return (
    <div className="metric-card">
      <img className="metric-card-image" src={image} alt={`${description} icon`} />
      <div className="metric-card-details">
        <h4 className="metric-card-title">{title}</h4>
        <p className="metric-card-description">{description}</p>
      </div>
    </div>
  );
}

// Validation des props
KeyCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default KeyCard;
