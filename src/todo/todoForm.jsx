import React, { Component } from 'react'
import IconBtn from '../template/iconBtn'
import GridCol from '../template/gridCol'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './TodoActions'


class TodoForm extends React.Component {
   constructor (props) {
      super(props)
      this.handleKeyPress = this.handleKeyPress.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.refresh = this.refresh.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
   }

   componentDidMount () {
      this.refresh()
   }
   
   handleKeyPress (e) {
      if(e.key == 'Enter') {
         if(e.shiftKey) {
            this.refresh()
         }
         else{
            this.handleAdd()
         }
      }
      else
      if(e.key == 'Escape') {
         this.props.onClear()
      }
   }

   handleChange (e)  {
      this.props.onChange(e.target.value)
   }

   handleAdd ()  {
      this.props.onAdd(this.props.description)
   }

   refresh ()  {
      this.props.onSearch(this.props.description)
   }

   render () {
      return <div role="form" className="todoForm row">
         <GridCol sm="12" md="8" lg="9">
            <input type="text" id="description" onKeyUp={this.handleKeyPress}
               className="form-control" placeholder="Adicione uma tarefa"
               value={this.props.description} onChange={this.handleChange}
            />
         </GridCol>
         <GridCol sm="12" md="4" lg="3">
            <div className="mt-3 mt-md-0">
               <IconBtn style="primary" icon="plus" onClick={this.handleAdd}/>
               <IconBtn style="secondary" icon="search" onClick={this.refresh} />
               <IconBtn style="default" icon="times" onClick={this.props.onClear} />
            </div>
         </GridCol>
      </div>
   }
}

const mapStateToProps = state => ({
   description: state.todo.description
})

const mapActionsToProps = dispatch => (
   bindActionCreators({
      onSearch: actions.search,
      onChange: actions.descriptionChange,
      onClear: actions.clear,
      onAdd: actions.add
   }, dispatch)
)

export default connect(mapStateToProps, mapActionsToProps)(TodoForm)