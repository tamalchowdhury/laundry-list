import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ name }) => {
  return <div className="single">{name}</div>;
};

Single.propTypes = {
  name: PropTypes.string.isRequired
};

export default Single;
