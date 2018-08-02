import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { mounted } from './TodoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class Todo extends Component {
   componentDidMount () {
      this.props.mounted()
   }

   render () {
      return <div className="container">
         <PageHeader name="Todo" small="Cadastro" />
         <TodoForm />
         <TodoList />
      </div>
   }
}


const mapDispatchToProps = dispatch => (
   bindActionCreators({mounted}, dispatch) 
)

export default connect(null, mapDispatchToProps)(Todo)