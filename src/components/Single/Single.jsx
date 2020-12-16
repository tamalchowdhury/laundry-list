import React from 'react';
import PropTypes from 'prop-types';
import './single.css';

const Single = (props) => {
  let { name, comment, date, image } = props.item;
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
