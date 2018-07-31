import React from 'react'
import IconBtn from '../template/iconBtn'


const renderList = (data, onRemove) => (
   data.map(x => (
      <tr key={x._id}>
         <td>{x.description}</td>
         <td>
            <IconBtn style="danger" icon="trash-o" onClick={()=>onRemove(x._id)} />
         </td>
      </tr>
   ))
)

const TodoList = props => (
   <table className="table mt-5">
      <thead className="thead-dark">
         <tr>
            <th>Tarefas</th>
            <th>Ações</th>
         </tr>
      </thead>
      <tbody>
         {renderList(props.data, props.onRemove)}
      </tbody>
      
   </table>
)

export default TodoList