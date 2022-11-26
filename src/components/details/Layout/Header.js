import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <Fragment>
         <header className='header'>
            <div>
                <h1>Task Tracker</h1>
            </div>
            <div>
                <Link to="/">Projects</Link>
                <Link to="/tasks">Tasks</Link>
            </div>
        </header>
    </Fragment>
  )
}

export default Header;