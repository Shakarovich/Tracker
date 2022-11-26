import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Project from './pages/Project/Project';
import Tasks from './pages/Tasks/Tasks';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Project/>}/>
          <Route path='/tasks'  element={<Tasks/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
