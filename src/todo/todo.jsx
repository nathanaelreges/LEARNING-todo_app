import React, { Component } from 'react'
import axios from 'axios'


import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
   constructor (props) {
      super(props)
      this.state = {description: "", list: []}

      this.handleAdd = this.handleAdd.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
      this.handleCheck = this.handleCheck.bind(this)
      this.handleUncheck = this.handleUncheck.bind(this)
      this.handleSearch = this.handleSearch.bind(this)
      this.handleClear = this.handleClear.bind(this)
      this.refresh = this.refresh.bind(this)

      this.refresh()
   }

   componentWillMount () {
     
   }

   refresh (description = '') {
      const needsSearch = description != ''
      console.log(description)
      
      const search = needsSearch?`?description__regex=/${description}/i&`:''
      const sort = '?sort=date'
      
      axios.get(`${URL}/${search + sort}`)
         .then((res) => {
            this.setState({ description, list: res.data })
         }
      )
   }

   handleChange (e) {
      this.setState({description: e.target.value})
   }

   handleAdd () {
      const description = this.state.description
      axios.post(URL, { description }).then(()=>{
         this.setState({description: ''})
         this.refresh()
      })
   }

   handleRemove (id) {
      axios.delete(URL + '/' + id).then(()=>
         this.refresh(this.state.description)
      )
   }

   handleCheck (id) {
      axios.put(URL + '/' + id, { done: 'true' })
         .then(()=>
            this.refresh(this.state.description)
         )
   }

   handleUncheck (id) {
      axios.put(URL + '/' + id, { done: 'false' })
         .then(()=>
            this.refresh(this.state.description)
         )
   }

   handleSearch () {
      this.refresh(this.state.description)
   }

   handleClear () {
      this.refresh()
   }

   render () {
      return <div className="container">
         <PageHeader name="Todo" small="Cadastro" />
         <TodoForm description={this.state.description} 
            onAdd={this.handleAdd} 
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            onClear={this.handleClear}
         />
         <TodoList data={this.state.list} 
            onRemove={this.handleRemove}
            onCheck={this.handleCheck}
            onUncheck={this.handleUncheck}
         />
      </div>
   }
}