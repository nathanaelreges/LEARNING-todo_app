import React from 'react'

const If = props => {
   if(props.test){
      return <i>{props.children}</i>
   }
   else {
      return null
   }
}

export default If