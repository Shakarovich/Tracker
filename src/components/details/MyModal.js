/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment, useState} from 'react';


const MyModal = ({title, content }) => {

    const [open, setOpen] = useState(false)

  return (
    <Fragment>
        <div className="container" onClick={() => {setOpen(true)}}>
            <div className="interior">
                <a className="btn">{title}</a>
            </div>
        </div>
        {open &&
        <div className="modal-window">
            <div>
                <a className='modal-close' onClick={() => {setOpen(false)}}>Close</a>
                {content}
            </div>
        </div>}
  
    </Fragment>
  )
}

export default MyModal