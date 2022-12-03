import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <lable htmlFor="filter">Find contacts by name</lable>
      <input
        name="filter"
        type="text"
        id="filter"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
