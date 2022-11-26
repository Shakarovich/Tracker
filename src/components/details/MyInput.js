import React from 'react';
import PropTypes from 'prop-types';


const MyInput = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
        <div>
            <input ref={ref} type="text"  {...props}/>
        </div>
    </React.Fragment>
  )
});

MyInput.propTypes = {
  children: PropTypes.node,
  props: PropTypes.node
};


export default MyInput;