import React from 'react';
import PropTypes from 'prop-types';
import './single.css';

const Single = ({ item }) => {
  let { name, comment, date, image } = item;
  return (
    <div className="single" style={{ backgroundImage: `url(${image})` }}>
      <p>{name}</p>
    </div>
  );
};

Single.propTypes = {
  item: PropTypes.object.isRequired
};

export default Single;
