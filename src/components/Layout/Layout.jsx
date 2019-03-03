import React from 'react';
import { connect } from 'react-redux';
import Single from '../Single/Single';
import Create from '../Create/Create';
import PropTypes from 'prop-types';

const Layout = ({ clothes }) => {
  return (
    <div className="layout">
      <Create />
      {clothes.map((item, index) => (
        <Single key={index} name={item} />
      ))}
    </div>
  );
};

Layout.propTypes = {};

const mapStateToProps = (state) => ({ clothes: state.clothes });
export default connect(mapStateToProps)(Layout);
