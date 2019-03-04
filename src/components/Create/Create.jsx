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
        <button
          className="close-button"
          onClick={() => props.toggleModal(false)}>
          &times;
        </button>
        <h1 id="modal-title">Add a new item</h1>
        <form class="form" onSubmit={createItem}>
          <label htmlFor="name">Item Name:</label>
          <input
            className="item-title"
            type="text"
            name="name"
            placeholder="Red Tee Shirt"
            autoFocus
          />

          <label htmlFor="comments">Comments: (Optional)</label>
          <textarea className="item-comments" name="comments" rows="2" />

          <label htmlFor="date">Pick a Date: (Default is Current)</label>
          <input className="item-date" type="date" name="date" />
          <div className="button-container">
            <button className="create-button">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.propTypes = {};

export default connect()(Create);
