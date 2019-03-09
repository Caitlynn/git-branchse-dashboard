import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import Instance from './pages/Instance';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/instance" component={Instance} />
    </Switch>
  );
}

export default Routes;
