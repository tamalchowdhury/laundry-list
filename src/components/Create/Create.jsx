import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Create = (props) => {
  function createItem(event) {
    event.preventDefault();
    let name = event.target.name.value.trim();
    if (name) {
      props.dispatch({ type: 'CREATE', name });
      event.target.reset();
    }
  }

  return (
    <div>
      <form onSubmit={createItem}>
        <input name="name" type="text" />
        <button>Create</button>
      </form>
    </div>
  );
};

Create.propTypes = {};

export default connect()(Create);
