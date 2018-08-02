import React from 'react'
import { Todo, TodoReducer } from '../Todo'
import About from '../about/about'
import Menu from '../template/menu'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'



const reducers = combineReducers({
   todo: TodoReducer
})

const store = applyMiddleware(reduxPromise)(createStore)(reducers)


const App = props => <Provider store={store}>
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