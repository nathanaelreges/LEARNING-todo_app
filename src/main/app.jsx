import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

import { Route, Redirect, Switch } from 'react-router-dom'


export default props => <div>
   <Menu />
   <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
   </Switch>
</div>