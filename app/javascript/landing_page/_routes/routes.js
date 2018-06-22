import React from 'react';
import { Route, Switch } from 'react-router';
import { LandingPage } from '../LandingPage';
import { SignUp } from '../SignUp';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import { Projects } from '../Projects';
import { FinishedProjects } from '../FinishedProjects';
import { Project } from '../Project';
import { User } from '../User';
import { EditUser } from '../EditUser';

export const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/finished' component={FinishedProjects} />
      <Route exact path='/projects/:id' component={Project} />
      <Route exact path='/users/:id' component={User} />
      <Route exact path='/users/:id/edit' component={EditUser} />
    </Switch>
  </div>
)
