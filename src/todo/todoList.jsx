import React from 'react'
import IconBtn from '../template/iconBtn'
import './todoStyles.css'
import { connect,  } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './TodoActions'


const renderList = (data = [], onRemove, onCheck, onUncheck) => (
   data.map(x => (
      <tr key={x._id}>
         <td className={x.done?'todo__text--done':''} >{x.description}</td>
         <td>
            <IconBtn style="success" icon="check" 
               onClick={()=>onCheck(x._id)} hide={x.done}
            />
            <IconBtn style="warning" icon="undo" 
               onClick={()=>onUncheck(x._id)} hide={!x.done}
            />
            <IconBtn style="danger" icon="trash-o" 
               onClick={()=>onRemove(x._id)} hide={!x.done}
            />
         </td>
      </tr>
   ))
)


const TodoList = props => (
   <table className="table mt-5">
      <colgroup>
         <col className="todo-list__col-txt"/>
         <col className="todo-list__col-btn"/>
      </colgroup>
      <thead className="thead-dark">
         <tr>
            <th>Tarefas</th>
            <th>Ações</th>
         </tr>
      </thead>
      <tbody>
         {renderList(props.list, props.onRemove, props.onCheck, props.onUncheck)}
      </tbody>     
   </table>
)

const mapStateToProps = state => ({
   list: state.todo.list
})

const mapDispatchToProps = dispatch => (
   bindActionCreators({
      onCheck: actions.markAsDone,
      onUncheck: actions.markAsUndone,
      onRemove: actions.remove
   }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)