import React from 'react'
import { Todo, TodoReducer } from '../todo'
import About from '../about/about'
import Menu from '../template/menu'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'



const reducers = combineReducers({
   todo: TodoReducer
})


const App = props => <Provider store={createStore(reducers)}>
   <div>
      <Menu />
      <Switch>
         <Route path="/todos" component={Todo} />
         <Route path="/about" component={About} />
         <Redirect from="*" to="/todos" />
      </Switch>
   </div>
</Provider>

export default App