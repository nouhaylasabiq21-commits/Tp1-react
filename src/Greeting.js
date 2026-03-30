import PropTypes from 'prop-types';

function Greeting({ prenom }) {
  return <h2>Bonjour {prenom} !</h2>;
}

Greeting.propTypes = {
  prenom: PropTypes.string.isRequired,
};

export default Greeting;