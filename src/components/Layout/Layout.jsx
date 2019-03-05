import React, { useState } from 'react';
import { connect } from 'react-redux';
import Single from '../Single/Single';
import Create from '../Create/Create';
import PropTypes from 'prop-types';

const Layout = ({ clothes }) => {
  // Local State for modal
  const [modal, toggleModal] = useState(false);
  return (
    <div className="layout">
      {modal ? <Create toggleModal={toggleModal} /> : ''}
      <h1>Laundry List</h1>
      <button onClick={toggleModal}>Add New Item</button>
      <div className="items-area">
        {clothes.map((item, index) => (
          <Single key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {};

const mapStateToProps = (state) => ({ clothes: state.clothes });
export default connect(mapStateToProps)(Layout);
