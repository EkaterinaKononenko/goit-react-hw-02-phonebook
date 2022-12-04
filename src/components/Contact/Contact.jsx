import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
