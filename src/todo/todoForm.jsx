import React, { Component } from 'react'
import IconBtn from '../template/iconBtn'
import GridCol from '../template/gridCol'

export default class TudoForm extends Component {
   render () {
      return <div role="form" className="tudoForm row">
         <GridCol sm="12" md="9" lg="10">
            <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa"/>
         </GridCol>
         <GridCol sm="12" md="3" lg="2">
            <IconBtn style="primary" icon="plus" />
         </GridCol>
      </div>
   }
}