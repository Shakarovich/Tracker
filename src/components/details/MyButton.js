import React from 'react';
import PropTypes from 'prop-types';


const MyButton = ({children, ...props}) => {
  return (
    <React.Fragment>
        <div>
            <button {...props}>{children}</button>
        </div>
    </React.Fragment>
  )
}

MyButton.propTypes = {
  children: PropTypes.node,
  props: PropTypes.node
}


export default MyButton;