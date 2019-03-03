import React, { useState } from 'react';
import { connect } from 'react-redux';
import './create.css';
import PropTypes from 'prop-types';

const Create = (props) => {
  function createItem(event) {
    event.preventDefault();
    let name = event.target.name.value.trim();
    if (name) {
      props.dispatch({ type: 'CREATE', name });
      props.toggleModal(false);
      event.target.reset();
    }
  }

  return (
    <div class="modal">
      <div className="modal-content">
        <button onClick={() => props.toggleModal(false)}>Close</button>
        <h1>Add a new item</h1>
        <form onSubmit={createItem}>
          <input name="name" type="text" />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

Create.propTypes = {};

export default connect()(Create);
