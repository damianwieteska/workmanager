import React from 'react'
import { Route, Switch } from 'react-router'
import { LandingPage } from '../LandingPage'
import { SignUp } from '../SignUp'
import { Login } from '../Login'
import { Dashboard } from '../Dashboard'
import { Projects } from '../Projects'
import { FinishedProjects } from '../FinishedProjects'

export const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/finished' component={FinishedProjects} />
    </Switch>
  </div>
)
