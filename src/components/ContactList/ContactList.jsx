import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <div>
        {contacts.map(({ id, name, number }) => {
          return (
            <form key={id}>
              <div>{name}</div>
              <div>{number}</div>
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </form>
          );
        })}
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
