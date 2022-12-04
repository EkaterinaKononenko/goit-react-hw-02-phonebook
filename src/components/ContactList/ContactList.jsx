import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </div>
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
