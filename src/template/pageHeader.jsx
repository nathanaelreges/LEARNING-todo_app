import React from 'react'

const PageHeader = props => <header className="my-4">
   <h2>{props.name}<small> {props.small}</small></h2>
</header>


export default PageHeader

