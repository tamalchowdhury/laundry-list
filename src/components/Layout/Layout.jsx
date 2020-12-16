import React, { useState } from 'react';
import { connect } from 'react-redux';
import Single from '../Single/Single';
import Create from '../Create/Create';
import PropTypes from 'prop-types';

// A layout component which takes clothes array as the prop.
// clothes are coming from the state from redux store
const Layout = ({ clothes }) => {
  // A local state within the layout to hold the modal
  // By default the modal state is false, means it does not
  // displays the create window
  const [showModal, toggleModal] = useState(false);
  return (
    // Render a layout which is a white area on purple background
    <div className="layout">
      {/* Show the create modal box when called */}
      {showModal && <Create toggleModal={toggleModal} />}
      <h1>Laundry List</h1>
      <button onClick={toggleModal}>Add New Item</button>
      <div className="items-area">
        {/* A add button that looks like the items for consistancy */}
        <div className="single add_button" onClick={toggleModal}>
          <div>+</div>
          <div>Add</div>
        </div>
        {/* Cycle through each items in the clothes array and display the items */}
        {clothes.map((item, index) => (
          // The Single component to show the items
          // We pass a single item into the component
          <Single key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {};

const mapStateToProps = (state) => ({ clothes: state.clothes });
// Injecting the state to the layout
export default connect(mapStateToProps)(Layout);
