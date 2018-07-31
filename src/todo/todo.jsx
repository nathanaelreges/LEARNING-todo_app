import React, { Component } from 'react'
import axios from 'axios'


import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
   constructor (props) {
      super(props)
      this.state = {formDescription: "", list: []}

      this.handleAdd = this.handleAdd.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
      this.handleCheck = this.handleCheck.bind(this)
      this.handleUncheck = this.handleUncheck.bind(this)
      this.refresh = this.refresh.bind(this)

      this.refresh()
   }

   componentWillMount () {
     
   }

   refresh () {
      axios.get(URL + '/?sort=date')
         .then((res) => {
            this.setState({ list: res.data })
         }
      )
   }

   handleChange (e) {
      this.setState({formDescription: e.target.value})
   }

   handleAdd () {
      const description = this.state.formDescription
      console.log('ADD: ' + description)
      axios.post(URL, { description }).then(
         () => {this.refresh()}
      )
   }

   handleRemove (id) {
      console.log('DELETE: ' + id)
      axios.delete(URL + '/' + id).then(
         () => {this.refresh()}
      )
   }

   handleCheck (id) {
      axios.put(URL + '/' + id, { done: 'true' })
         .then(this.refresh)
   }

   handleUncheck (id) {
      axios.put(URL + '/' + id, { done: 'false' })
         .then(this.refresh)
   }

   render () {
      return <div className="container">
         <PageHeader name="Todo" small="Cadastro" />
         <TodoForm description={this.state.formDescription} 
            zzAdd={this.handleAdd} handleChange={this.handleChange}
         />
         <TodoList data={this.state.list} 
            onRemove={this.handleRemove}
            onCheck={this.handleCheck}
            onUncheck={this.handleUncheck}
         />
      </div>
   }
}