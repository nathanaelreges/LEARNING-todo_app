import React from 'react'
import If from './if'

const IconBtn =  props => (
   <If test={!props.hide}>
      <button className={"btn mr-3 btn-" + props.style} onClick={props.onClick}>
         <i className={"fa fa-" + props.icon}></i>
      </button>
   </If>
)

export default IconBtn