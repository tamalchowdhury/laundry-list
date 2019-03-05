import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item }) => {
  let { name, comment, date, image } = item;
  return (
    <div className="single">
      <p>{name}</p>
      <img src={`${image}`} alt={name} />
      <p>
        {comment}, {date}
      </p>
    </div>
  );
};

Single.propTypes = {
  item: PropTypes.object.isRequired
};

export default Single;
