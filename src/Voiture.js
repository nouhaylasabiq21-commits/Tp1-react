import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur }) {
  return (
    <p>
      Voiture : {marque} {modele}, Couleur : {couleur}
    </p>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default Voiture;