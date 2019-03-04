import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item }) => {
  let { name, comment, date } = item;
  return (
    <div className="single">
      <p>{name}</p>
      <p>
        {comment}, {date}
      </p>
    </div>
  );
};

Single.propTypes = {
  name: PropTypes.string.isRequired
};

export default Single;
