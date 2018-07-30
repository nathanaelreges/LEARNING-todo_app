import React from 'react'

export default props => (
   <div className={'col-sm-' + props.sm + ' col-md-' + props.md + ' col-lg-' + props.lg}>
      {props.children}
   </div>
)
