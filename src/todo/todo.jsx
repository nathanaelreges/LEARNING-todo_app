import React, { Component } from 'react'
import axios from 'axios'


import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
   render () {
      return <div className="container">
         <PageHeader name="Todo" small="Cadastro" />
         <TodoForm />
         <TodoList />
      </div>
   }
}