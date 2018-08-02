import React, { Component } from 'react'
import IconBtn from '../template/iconBtn'
import GridCol from '../template/gridCol'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './todoActions'


const TodoForm = props => {
   const handleKeyPress = e => {
      if(e.key == 'Enter') {
         if(e.shiftKey) {
            props.onSearch()
         }
         else{
            props.onAdd()
         }
      }
      else
      if(e.key == 'Escape') {
         props.onClear()
      }
   }

   return <div role="form" className="todoForm row">
      <GridCol sm="12" md="8" lg="9">
         <input type="text" id="description" onKeyUp={handleKeyPress}
            className="form-control" placeholder="Adicione uma tarefa"
            value={props.description} onChange={props.onChange}
         />
      </GridCol>
      <GridCol sm="12" md="4" lg="3">
         <div className="mt-3 mt-md-0">
            <IconBtn style="primary" icon="plus" onClick={props.onAdd}/>
            <IconBtn style="secondary" icon="search" onClick={props.onSearch} />
            <IconBtn style="default" icon="times" onClick={props.onClear} />
         </div>
      </GridCol>
   </div>
}

const mapStateToProps = state => ({
   description: state.todo.description
})

const mapActionsToProps = dispatch => (
   bindActionCreators({
      onSearch: actions.search
   }, dispatch)
)

export default connect(mapStateToProps, mapActionsToProps)(TodoForm)