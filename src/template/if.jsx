import React from 'react'

const If = props => {
   if(props.test){
      return <div>{props.children}</div>
   }
   else {
      return null
   }
}

export default If