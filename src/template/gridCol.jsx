import React from 'react'

const GridCol = props => (
   <div className={'col-sm-' + props.sm + ' col-md-' + props.md + ' col-lg-' + props.lg}>
      {props.children}
   </div>
)

export default GridCol
