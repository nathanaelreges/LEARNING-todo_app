import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'

import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
   constructor (props) {
      super(props)
      this.state = {formDescription: "", list: []}

      this.handleAdd = this.handleAdd.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange (e) {
      this.setState({formDescription: e.target.value})
   }

   handleAdd () {
      const description = this.state.formDescription
      console.log(description)
      axios.post(URL, { description }).then(
         (x) => console.log(x)
      )
   }

   render () {
      return <div className="container">
         <PageHeader name="Todo" small="Cadastro" />
         <TodoForm description={this.state.formDescription} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
      </div>
   }
}