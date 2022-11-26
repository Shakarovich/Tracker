import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';


const MetaDecorator = ({ title, description, name, type }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name={name} content={description} type={type}/>
    </Helmet>
  )
};

MetaDecorator.propTypes = {
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired
}


export default MetaDecorator;