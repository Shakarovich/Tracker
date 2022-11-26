import React, { Fragment } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MetaDecorator from '../../components/MetaDecorator';
import LayoutProvider from '../../components/details/Layout/LayoutProvider';

const Tasks = () => {
  return (
    <Fragment>
      <HelmetProvider>
      <MetaDecorator title="Tracker-Tasks" description="React DOM rendering tasks page" name="Tracker-Tasks" type="article"/>
        <LayoutProvider>
        </LayoutProvider>
      </HelmetProvider>
    </Fragment>
  )
}

export default Tasks;