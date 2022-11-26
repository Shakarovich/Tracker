import React, { Fragment } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PropTypes from 'prop-types';

const LayoutProvider = ({children}) => {
  return (
    <Fragment>
        <Header/>
        {children}
        <Footer/>
    </Fragment>
  )
}

LayoutProvider.propTypes = {
    children: PropTypes.node
}

export default LayoutProvider;